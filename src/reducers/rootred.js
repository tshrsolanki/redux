import { combineReducers } from "redux";
import { Comp1 } from "./Comp1";
import { Comp2 } from "./Comp2";

export const rootreducer = combineReducers({
  data1: Comp1,
  data2: Comp2,
});
