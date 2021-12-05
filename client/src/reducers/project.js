export const project = (state = [], action) => {
  switch (action.type) {
    case "CREATE_POST":
      return (state = action.data);
    case "GET_POST":
      return (state = action.data);
    case "DELETE_PROJECT":
      return (state = action.data);
    default:
      return state;
  }
};
