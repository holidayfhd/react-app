import React, { memo } from "react";
import Color from "../color";
import Button from "../button";

export default memo(function Main() {
  return (
    <div className="container">
      <Button />
      <Color />
    </div>
  );
});
