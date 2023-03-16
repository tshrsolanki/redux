export const Comp2 = (state = "", action) => {
  switch (action.type) {
    case "SET_COMP2":
      return action.payload;

    default:
      return state;
  }
};
