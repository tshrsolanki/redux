import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Comp2 = () => {
  const dispatch = useDispatch();
  const data2 = useSelector((state) => state.data2);

  const handle = (e) => {
    dispatch({
      type: "SET_COMP2",
      payload: e.target.value,
    });
  };
  return (
    <div>
      <input type="text" onChange={handle} />
    </div>
  );
};
