import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import "./index.css";

function Button(props) {
  const { color } = useSelector(
    (state) => ({ color: state.color }),
    shallowEqual //进行浅等式比较 而不是===
  );
  return (
    <div className="btnContainer">
      <button className="btn mgt20" style={{ backgroundColor: color }}>
        Primary Button
      </button>
    </div>
  );
}

export default memo(Button);
