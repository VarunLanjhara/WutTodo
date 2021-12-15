export const projectTasks = (state = [], action) => {
  switch (action.type) {
    case "GET_PROJECT_TASKS":
      return (state = action.data);
    case "CREATE_PROJECT_TASKS":
      return (state = action.data);
    case "DELETE_PROJECT_TASK":
      return (state = action.data);
    case "UPDATE_PROJECT_TASK":
      return (state = action.data);
    default:
      return state;
  }
};
