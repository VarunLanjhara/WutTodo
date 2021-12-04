export const user = (state = { authData: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", JSON.stringify(action?.data));
      return { ...state, authData: action?.data };
    case "REGISTER":
      localStorage.setItem("token", JSON.stringify(action?.data));
      return { ...state, authData: action?.data };
    case "GET_USER_BYID":
      return state;
    default:
      return state;
  }
};
