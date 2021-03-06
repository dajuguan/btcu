import { assert } from "chai";
import _ from "lodash";
import shortid from "shortid";
import db from "server/db";
import { recreateTables, authenticate } from "../../helpers";

const boardId = shortid.generate();
const listId = shortid.generate();

describe("lists routes", () => {
  beforeEach(recreateTables);

  it("POST /api/lists/:id/cards should respond with 201 and return created card", done => {
    setup()
      .then(request => {
        request
          .post(`/api/lists/${listId}/cards`)
          .send({
            text: "test card"
          })
          .expect(201)
          .end((err, res) => {
            if (err) {
              return done(err);
            }

            const { result, notification } = res.body;
            const link = "/boards/" + boardId + "/cards/" + result.card.id;

            assert.property(result.card, "id");
            assert.property(result.card, "colors");
            assert.notEqual(result.card.colors, 0);
            assert.property(result.activity, "created_at");
            delete result.card.id;
            delete result.card.colors;
            delete result.activity.created_at;

            assert.deepEqual(result, {
              card: {
                link,
                text: "test card"
              },
              activity: {
                id: 1,
                action: "Created",
                type: "card",
                entry: {
                  title: "test card",
                  link
                }
              }
            });

            assert.deepEqual(notification, {
              message: "Card was successfully created",
              type: "info"
            });

            done();
          });
      })
      .catch(done);
  });

  it("PUT /api/lists/:id should respond with 200 and return updated entry", done => {
    setup()
      .then(request => {
        request
          .put(`/api/lists/${listId}`)
          .send({
            title: "new title"
          })
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }

            const { result, notification } = res.body;

            assert.property(result.activity, "created_at");
            delete result.activity.created_at;

            assert.deepEqual(result, {
              list: {
                id: listId,
                title: "new title"
              },
              activity: {
                id: 1,
                action: "Updated",
                type: "list",
                entry: {
                  title: "new title",
                  link: "/boards/" + boardId + "/lists/" + listId
                }
              }
            });

            assert.deepEqual(notification, {
              message: "List was successfully updated",
              type: "info"
            });

            done();
          });
      })
      .catch(done);
  });

  it("DELETE /api/lists/:id should respond with 200 and return deleted entry id", done => {
    setup()
      .then(request => {
        request
          .delete(`/api/lists/${listId}`)
          .expect(200)
          .end((err, res) => {
            if (err) {
              return done(err);
            }

            const { result, notification } = res.body;

            assert.property(result.activity, "created_at");
            delete result.activity.created_at;

            assert.deepEqual(result, {
              list: {
                id: listId
              },
              activity: {
                id: 1,
                action: "Removed",
                type: "list",
                entry: {
                  title: "test list",
                  link: "/boards/" + boardId + "/lists/" + listId
                }
              }
            });

            assert.deepEqual(notification, {
              message: "List was successfully removed",
              type: "info"
            });

            done();
          });
      })
      .catch(done);
  });
});

function setup() {
  return db
    .none(
      `INSERT INTO boards (id, title) VALUES($1, 'test board');
    INSERT INTO lists (id, title) VALUES($2, 'test list');
    INSERT INTO boards_lists VALUES ($1, $2)`,
      [boardId, listId]
    )
    .then(authenticate);
}
