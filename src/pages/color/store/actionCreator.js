import { createAction } from "redux-actions";
import * as actionTypes from "./constants";

// export const changeBg = (color) => ({
//   type: actionTypes.CHANGE_BG,
//   color,
// });
export const changeBg = createAction(actionTypes.CHANGE_BG, (color) => color);
