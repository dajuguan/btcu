import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { reducer as form } from "redux-form";
import entities from "./entities";
import pages from "./pages";
import notifications from "./notifications";
import user from "./user";
import search from "./search";
import progressBar from "./progressBar";
import activity from "./activity";
import modal from "./modal";
import menu from "./menu";

const rootReducer = combineReducers({
  entities,
  routing,
  pages,
  notifications,
  user,
  search,
  progressBar,
  activity,
  modal,
  form,
  menu
});

export default rootReducer;
