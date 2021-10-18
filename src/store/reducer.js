import { combineReducers } from "redux";
import { reducer as colorReducer } from "../pages/color/store";
export default combineReducers({
  color: colorReducer,
});
