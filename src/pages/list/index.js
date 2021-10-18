import React, { useEffect, memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getList } from "./store/actionCreator";

function List() {
  const dispatch = useDispatch();
  const { data, color } = useSelector(
    (state) => ({
      data: state.play.list,
      color: state.color,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div>
      {data.slice(0, 10).map((item, index) => (
        <div style={{ color: color }} key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default memo(List);
