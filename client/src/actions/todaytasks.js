import * as api from "../api/api";

export const getTodayTasks = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getTodayTasks(userId);
    dispatch({
      type: "GET_TODAY_TASKS",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createTodayTask = (databoi) => async (dispatch) => {
  try {
    const { data } = await api.createTodayTask(databoi);
    dispatch({
      type: "CREATE_TODAY_TASK",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodayTask = (id, userId) => async (dispatch) => {
  try {
    const { data } = await api.deleteTodayTask(id, userId);
    dispatch({
      type: "DELETE_TODAY_TASK",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editTodayTask =
  (id, name, description, completed, userId) => async (dispatch) => {
    try {
      const { data } = await api.editTodayTask(
        id,
        name,
        description,
        completed,
        userId
      );
      dispatch({
        type: "UPDATE_TODAY_TASK",
        data,
      });
    } catch (err) {
      console.log(err);
    }
  };
export const searchTodayTasks = (searchshit) => async (dispatch) => {
  try {
    const { data } = await api.searchTodayTask(searchshit);
    dispatch({
      type: "SEARCH_TODAY_TASK",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};
