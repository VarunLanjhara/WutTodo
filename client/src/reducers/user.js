export const user = (state = { authData: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", JSON.stringify(action?.data));
      return { ...state, authData: action?.data };
    case "REGISTER":
      localStorage.setItem("token", JSON.stringify(action?.data));
      return { ...state, authData: action?.data };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...state, authData: null };
    case "GET_USER_BYID":
      return { ...state, authData: action.data };
    case "UPDATE_PROFILE":
      return { ...state, authData: action.data };
    default:
      return state;
  }
};
