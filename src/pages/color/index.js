import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { colorActions } from "./store/actionCreator";
import "./index.css";

function Home(props) {
  const dispatch = useDispatch();
  const colors = ["#e88b00", "#337d56", "#bf80ff", "#fc8705", "#c85b92"];
  return (
    <div className="colorContainer">
      {colors.map((color) => (
        <div
          key={color}
          className="colorRect"
          style={{ backgroundColor: color }}
          onClick={() => {
            dispatch(colorActions.color.changeBg(color));
          }}
        />
      ))}
    </div>
  );
}
export default memo(Home);
