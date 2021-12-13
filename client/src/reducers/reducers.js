import { user } from "./user";
import { project } from "./project";
import { todaytasks } from "./todaytasks";
import { singleproject } from "./singleproject";
import { projectTasks } from "./projecttasks";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  project,
  todaytasks,
  singleproject,
  projectTasks,
});
