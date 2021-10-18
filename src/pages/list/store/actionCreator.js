import * as actionTypes from "./constants";
import { getData } from " ../../../src/services/list";

export const getList = () => {
  return (dispath) => {
    getData().then((res) => {
      console.log(res);
      dispath(getDataAction(res));
    });
  };
};

const getDataAction = (res) => ({
  type: actionTypes.CHANGE_LIST,
  list: res.playList,
});
