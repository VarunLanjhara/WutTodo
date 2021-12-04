import * as api from "../api/api";

export const login = (databoi, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(databoi);
    dispatch({
      type: "LOGIN",
      data,
    });
    navigate("/app/today");
  } catch (error) {
    console.log(error);
  }
};

export const register = (databoi, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(databoi);
    dispatch({
      type: "REGISTER",
      data,
    });
    navigate("/app/today");
  } catch (error) {
    console.log(error);
  }
};

export const get_user_byid = (id) => async (dispatch) => {
  try {
    const { data } = await api.get_user_byid(id);
    dispatch({
      type: "GET_USER_BYID",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
