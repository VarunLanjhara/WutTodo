export const singleproject = (state = {}, action) => {
  switch (action.type) {
    case "SINGLE_PROJECT":
      return (state = action.data);
    default:
      return state;
  }
};
