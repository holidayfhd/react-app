/* eslint-disable import/no-anonymous-default-export */
const defaultState = {
  list: [],
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case "list/CHANGE_LIST":
      console.log(state, action);
      return { ...state, list: action.list };
    default:
      return state;
  }
};
