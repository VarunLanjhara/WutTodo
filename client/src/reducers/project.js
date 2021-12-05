export const project = (state = [], action) => {
  switch (action.type) {
    case "CREATE_POST":
      return action.data;
    case "GET_POST":
      return (state = action.data);
    default:
      return state;
  }
};
