import * as api from "../api/api";
export const getSingleProject = (projectId) => async (dispatch) => {
  try {
    const { data } = await api.getProjectbyId(projectId);
    dispatch({
      type: "SINGLE_PROJECT",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const commentProject = (databoi) => async (dispatch) => {
  try {
    const { data } = await api.commentOnProject(databoi);
    dispatch({
      type: "COMMENT_PROJECT",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
