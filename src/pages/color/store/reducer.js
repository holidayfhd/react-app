/* eslint-disable import/no-anonymous-default-export */
const defaultState = "red";
export default (state = defaultState, action) => {
  switch (action.type) {
    case "color/CHANGE_BG":
      console.log(state, action);
      return action.color;
    default:
      return state;
  }
};
