import React, { memo } from "react";
import { connect } from "react-redux";
import "./index.css";

const mapStateToProps = (state) => ({ color: state.color });
function Button(props) {
  return (
    <div className="btnContainer">
      <button className="btn mgt20" style={{ backgroundColor: props.color }}>
        Primary Button
      </button>
    </div>
  );
}

export default memo(connect(mapStateToProps, () => ({}))(Button));
