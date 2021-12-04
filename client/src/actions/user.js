import * as api from "../api/api";

export const login = (databoi, navigate) => async (dispatch) => {
  try {
    const { data } = api.login(databoi);
    dispatch({
      type: "LOGIN",
      data,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
