import * as actionTypes from "./constants";

export const changeBg = (color) => ({
  type: actionTypes.CHANGE_BG,
  color,
});
