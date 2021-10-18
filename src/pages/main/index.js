import React, { memo } from "react";
import Color from "../color";
import Button from "../button";
import List from "../list";

export default memo(function Main() {
  return (
    <div className="container">
      <Button />
      <List />
      <Color />
    </div>
  );
});
