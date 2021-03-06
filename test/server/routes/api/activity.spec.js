import { assert } from "chai";
import Promise from "bluebird";
import _ from "lodash";
import db from "server/db";
import shortid from "shortid";
import { recreateTables, authenticate } from "../../helpers";

const user2Id = shortid.generate();
const boardId = shortid.generate();
const listId = shortid.generate();
const cardId = shortid.generate();

describe("activity routes", () => {
  beforeEach(recreateTables);

  it("GET /api/activity should respond with 200 and return last 15 activity", done => {
    setup()
      .then(request => {
        request
          .get(`/api/activity`)
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }

            const activity = res.body.result;

            assert.lengthOf(activity, 5);
            assert.property(activity[0], "created_at");
            assert.deepEqual(_.omit(activity[0], ["created_at"]), {
              id: 25,
              action: "Updated",
              type: "card",
              entry: {
                title: "test card",
                link: `/boards/${boardId}/cards/${cardId}`
              }
            });

            done();
          });
      })
      .catch(done);
  });
});

function setup() {
  return authenticate().then(request => {
    return db.one("SELECT id FROM users").then(result => {
      return db
        .none(
          `
          INSERT INTO boards (id, title) VALUES ($1, 'test board');
          INSERT INTO lists (id, title) VALUES ($2, 'test list');
          INSERT INTO boards_lists VALUES ($1, $2);
          INSERT INTO cards (id, text) VALUES ($3, 'test card');
          INSERT INTO lists_cards VALUES ($2, $3)
          `,
          [boardId, listId, cardId]
        )
        .then(() => {
          const userId = result.id;

          return Promise.each(_.range(25), (item, i) => {
            return new Promise((resolve, reject) => {
              const now = Math.floor(Date.now() / 1000 + i);
              db.none(
                `
                  INSERT INTO activity (created_at, entry_id, user_id, entry_table, action)
                  VALUES ($1, $2, $3, 'cards', 'Updated')
                  `,
                [now, cardId, i < 20 ? user2Id : userId]
              ).then(resolve, reject);
            });
          });
        })
        .then(() => request);
    });
  });
}
