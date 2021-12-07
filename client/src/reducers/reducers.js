import { user } from "./user";
import { project } from "./project";
import { todaytasks } from "./todaytasks";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  project,
  todaytasks,
});
