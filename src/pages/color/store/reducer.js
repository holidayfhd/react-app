import { handleActions } from "redux-actions";
import * as actionTypes from "./constants";
/* eslint-disable import/no-anonymous-default-export */
const defaultState = "red";
// export default (state = defaultState, action) => {
//   switch (action.type) {
//     case "color/CHANGE_BG":
//       console.log(state, action);
//       return action.color;
//     default:
//       return state;
//   }
// };
// const colorReducer = handleAction(
//   actionTypes.CHANGE_BG,
//   (state, action) => {
//     return action.payload;
//   },
//   defaultState
// );
const colorReducer = handleActions(
  {
    [actionTypes.CHANGE_BG]: (state, action) => action.payload,
  },
  defaultState
);
export default colorReducer;
