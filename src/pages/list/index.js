import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getList } from "./store/actionCreator";

function List() {
  const dispatch = useDispatch();
  const { data } = useSelector(
    (state) => ({
      data: state.play.list,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div>
      {data.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
}

export default memo(List);
