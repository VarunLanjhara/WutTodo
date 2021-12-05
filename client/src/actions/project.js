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

export const getPost = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getPosts(userId);
    dispatch({
      type: "GET_POST",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (projectId, userId) => async (dispatch) => {
  try {
    const { data } = await api.deleteProject(projectId, userId);
    dispatch({
      type: "DELETE_PROJECT",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
