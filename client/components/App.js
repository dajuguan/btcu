import React, { PropTypes } from "react";
import Header from "./Header";
import NotificationsContainer from "../containers/NotificationsContainer";
import ProgressBarContainer from "../containers/ProgressBarContainer";
import ModalContainer from "../containers/ModalContainer";
import Scrollbar from "./Scrollbar";

function App({ children, onScroll, store }) {
  return (
    <Scrollbar onScroll={onScroll}>
      <div className="b-app">
        <ProgressBarContainer />
        <Header store={store} />
        <div className="b-route-handler">{children}</div>
        <NotificationsContainer />
        <ModalContainer />
      </div>
    </Scrollbar>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
