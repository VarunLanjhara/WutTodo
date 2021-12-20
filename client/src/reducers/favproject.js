export const favproject = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAV_PROJECT":
      return (state = action.data);
    case "GET_USER_FAV_PROJECT":
      return (state = action.data);
    default:
      return state;
  }
};
