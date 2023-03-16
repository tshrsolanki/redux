import { createStore } from "redux";
import { rootreducer } from "./reducers/rootred";

const store = createStore(rootreducer);
export default store;
