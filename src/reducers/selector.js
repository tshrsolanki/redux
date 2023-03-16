import { createSelector } from "reselect";

const comp1reducer = (state) => state.data1;
export const data1item = createSelector([comp1reducer], (data1) => {
  console.log(data1);
  return data1;
});
const comp2reducer = (state) => state.data2;
export const data2item = createSelector([comp2reducer], (data2) => {
  console.log(data2);
  return data2;
});
