import * as api from "../api/api";

export const createPost = (databoi) => async (dispatch) => {
  try {
    const { data } = await api.createPost(databoi);
    dispatch({
      type: "CREATE_POST",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
