import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { data1item, data2item } from "./reducers/selector";

export const Comp1 = () => {
  console.log("render");
  const dispatch = useDispatch();
  const data1 = useSelector(data1item);
  const data2 = useSelector(data2item);
  const handle = (e) => {
    dispatch({
      type: "SET_COMP1",
      payload: e.target.value,
    });
  };
  return (
    <div>
      <input type="text" onChange={handle} />
      {data1}
    </div>
  );
};
