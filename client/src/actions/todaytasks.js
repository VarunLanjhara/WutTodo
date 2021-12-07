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
