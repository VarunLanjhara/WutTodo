export const projectTasks = (state = [], action) => {
  switch (action.type) {
    case "GET_PROJECT_TASKS":
      return (state = action.data);
    default:
      return state;
  }
};
