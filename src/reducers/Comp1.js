export const Comp1 = (state = "", action) => {
  switch (action.type) {
    case "SET_COMP1":
      return action.payload;

    default:
      return state;
  }
};
