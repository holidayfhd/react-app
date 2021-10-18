import * as actionTypes from "./constants";
import { getData } from " ../../../src/services/list";

export const getList = () => {
  return (dispath) => {
    getData(0).then((res) => {
      dispath(getDataAction(res));
    });
  };
};

const getDataAction = (res) => ({
  type: actionTypes.CHANGE_LIST,
  list: res.playlist.tracks,
});
