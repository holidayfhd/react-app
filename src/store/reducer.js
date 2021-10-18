import { combineReducers } from "redux";
import { reducer as colorReducer } from "../pages/color/store";
import { reducer as listReducer } from "../pages/list/store";

export default combineReducers({
  color: colorReducer,
  play: listReducer,
});
