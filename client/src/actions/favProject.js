import * as api from "../api/api";

export const addFavProject = (databoi) => async (dispatch) => {
  try {
    const { data } = await api.addFavProject(databoi);
    dispatch({
      type: "ADD_FAV_PROJECT",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getuserFavProject = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getuserFavProject(userId);
    dispatch({
      type: "GET_USER_FAV_PROJECT",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
