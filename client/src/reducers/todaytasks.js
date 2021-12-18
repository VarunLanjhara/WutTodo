export const todaytasks = (state = [], action) => {
  switch (action.type) {
    case "GET_TODAY_TASKS":
      return (state = action.data);
    case "CREATE_TODAY_TASK":
      return (state = action.data);
    case "DELETE_TODAY_TASK":
      return (state = action.data);
    case "UPDATE_TODAY_TASK":
      return (state = action.data);
    case "SEARCH_TODAY_TASK":
      return (state = action.data);
    default:
      return state;
  }
};
