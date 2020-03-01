import React, { Component, PropTypes } from "react";
import types from "../constants/actionTypes";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { fetchActivity } from "../actions/activityActions";
import { hidePreloader } from "../utils";
import App from "../components/App";

class AppContainer extends Component {
  componentWillMount() {
    console.log("app contrainer");
    // this.props.fetchUser();
    // this.props.fetchActivity();
  }

  componentDidUpdate() {
    if (this.props.loaded) {
      hidePreloader();
    }
  }

  render() {
    const { children, loaded, handleScroll } = this.props;
    return loaded ? (
      <App onScroll={handleScroll} store={this.props.store}>
        {children}
      </App>
    ) : (
      <div />
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
  loaded: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    // loaded: !!(state.activity.lastUpdated && state.user.lastUpdated)
    loaded: true
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser() {
      // dispatch(fetchUser.request());
    },

    fetchActivity() {
      // dispatch(fetchActivity.request());
    },

    handleScroll(e) {
      if (window.innerHeight + e.target.scrollTop >= e.target.scrollHeight) {
        dispatch({
          type: types.SCROLL_BOTTOM
        });
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
