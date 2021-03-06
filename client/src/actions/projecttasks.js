import * as api from "../api/api";

export const getProjectTasks = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getProjectTask(userId);
    dispatch({
      type: "GET_PROJECT_TASKS",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createProjectTask = (databoi) => async (dispatch) => {
  try {
    const { data } = await api.createProjectTask(databoi);
    dispatch({
      type: "CREATE_PROJECT_TASKS",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteProjectTask = (id, projectId) => async (dispatch) => {
  try {
    const { data } = await api.deleteProjectTask(id, projectId);
    dispatch({
      type: "DELETE_PROJECT_TASK",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editProjectTask =
  (id, name, description, completed, projectId) => async (dispatch) => {
    try {
      const { data } = await api.editProjectTask(
        id,
        name,
        description,
        completed,
        projectId
      );
      dispatch({
        type: "UPDATE_PROJECT_TASK",
        data,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const searchProjectTask = (searchshit) => async (dispatch) => {
  try {
    const { data } = await api.searchProjectTask(searchshit);
    dispatch({
      type: "SEARCH_PROJECT_TASK",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};
