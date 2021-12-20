import { user } from "./user";
import { project } from "./project";
import { todaytasks } from "./todaytasks";
import { singleproject } from "./singleproject";
import { projectTasks } from "./projecttasks";
import { combineReducers } from "redux";
import { favproject } from "./favproject";

export default combineReducers({
  user,
  project,
  todaytasks,
  singleproject,
  projectTasks,
  favproject,
});
