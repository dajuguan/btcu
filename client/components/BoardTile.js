import React, { PropTypes } from "react";
import { Link } from "react-router";
import { addModifiers } from "../utils";
import IconItem from "./IconItem";
import Icon from "./Icon";
import MenuList from "./MenuList";
import ToggleMenu from "./ToggleMenu";

function BoardTile({
  id,
  link,
  title,
  starred,
  listsLength,
  cardsLength,
  onRemoveClick,
  onEditClick,
  onToggleStarredClick
}) {
  return (
    <div className="b-board-tile">
      <div className="b-board-tile__top">
        <div className="b-board-tile__left">
          <span className="b-board-tile__title">{""}</span>
        </div>
        <div className="b-board-tile__right">
          <div className="b-board-tile__right-item">
            <a
              className="b-board-tile__toggle-starred"
              onClick={() => onToggleStarredClick(id, starred)}
            >
              {starred ? <Icon name="star" /> : <Icon name="star-empty" />}
            </a>
          </div>
          <div className="b-board-tile__right-item">
            <ToggleMenu
              menu={
                <MenuList
                  modifiers={["sm"]}
                  items={[
                    {
                      title: "Edit",
                      onClick: () => onEditClick(id)
                    },
                    {
                      title: "Remove",
                      onClick: () => onRemoveClick(id)
                    }
                  ]}
                />
              }
            />
          </div>
        </div>
      </div>
      <div className="b-board-tile__bottom">
        <div className="b-board-tile__left">
          <div className="b-board-tile__board-info">
            <div className="b-board-tile__icon-item">
              <IconItem iconWidth="15" iconName="list">
                {listsLength}
              </IconItem>
            </div>
            <div className="b-board-tile__icon-item">
              <IconItem iconWidth="14" iconName="card">
                {cardsLength}
              </IconItem>
            </div>
          </div>
        </div>
        <div className="b-board-tile__right">
          <Link className="b-board-tile__more" to={link}>
            More
          </Link>
        </div>
      </div>
    </div>
  );
}

BoardTile.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  starred: PropTypes.bool.isRequired,
  listsLength: PropTypes.number.isRequired,
  cardsLength: PropTypes.number.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onToggleStarredClick: PropTypes.func.isRequired
};

export default BoardTile;
