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
