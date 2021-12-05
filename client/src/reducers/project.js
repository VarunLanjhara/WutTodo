export const project = (state = [], action) => {
  switch (action.type) {
    case "CREATE_POST":
      return action.data;
    default:
      return state;
  }
};
