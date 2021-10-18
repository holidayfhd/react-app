import React, { memo } from "react";
import { connect } from "react-redux";
import { changeBg } from "./store/actionCreator";
import "./index.css";

const mapStateToProps = (state) => ({ color: state.color });
const mapDispathToProps = (dispath) => ({
  changeColor: (color) => {
    dispath(changeBg(color));
  },
});
function Home(props) {
  const colors = ["#e88b00", "#337d56", "#bf80ff", "#fc8705", "#c85b92"];
  return (
    <div className="colorContainer">
      {colors.map((color) => (
        <div
          key={color}
          className="colorRect"
          style={{ backgroundColor: color }}
          onClick={() => {
            props.changeColor(color);
          }}
        />
      ))}
    </div>
  );
}
export default memo(connect(mapStateToProps, mapDispathToProps)(Home));
