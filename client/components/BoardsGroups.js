import React, { PropTypes } from "react";
import Icon from "./Icon";
import Toggle from "./Toggle";
import Animation from "./Animation";
import Boards from "./Boards";

function BoardsGroups({ groups, onGroupTitleClick }) {
  return (
    <div className="b-boards-groups">
      <div className="b-container">
        {[groups[0]].map(
          ({ title, type, ids, count, hidden, spinner, error }, i) => (
            <div className="b-boards-groups__group" key={i}>
              <Boards ids={ids} spinner={spinner} error={error} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

BoardsGroups.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      ids: PropTypes.array.isRequired,
      hidden: PropTypes.bool.isRequired,
      count: PropTypes.number,
      spinner: PropTypes.bool,
      error: PropTypes.bool
    })
  ).isRequired,
  onGroupTitleClick: PropTypes.func.isRequired
};

export default BoardsGroups;
