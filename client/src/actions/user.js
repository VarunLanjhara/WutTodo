import * as api from "../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const login = (databoi) => async (dispatch) => {
  try {
    const { data } = await api.login(databoi);
    if (data.length === 0) {
      toast.error("Invalid Credentials");
    } else {
      dispatch({
        type: "LOGIN",
        data,
      });
      window.location.href = "/app/today";
    }
  } catch (error) {
    console.log(error);
  }
};

export const register = (databoi) => async (dispatch) => {
  try {
    const { data } = await api.register(databoi);
    if (data.length === 0) {
      toast.error("User with same credentials already exists");
    } else {
      dispatch({
        type: "REGISTER",
        data,
      });
      window.location.href = "/app/today";
    }
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

export const update_profile = (id, databoi) => async (dispatch) => {
  try {
    const { data } = await api.update_profile(id, databoi);
    dispatch({
      type: "UPDATE_PROFILE",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
