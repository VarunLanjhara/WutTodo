export const user = (state = { authData: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      return localStorage.setItem("token", JSON.stringify(action?.data));
    case "REGISTER":
      return localStorage.setItem("token", JSON.stringify(action?.data));
    case "GET_USER_BYID":
      return { ...state, authData: action.data };
    default:
      return state;
  }
};
