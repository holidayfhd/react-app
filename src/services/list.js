import request from "./axios";

export function getData(idx) {
  return request({
    url: "/top/list",
    params: {
      idx,
    },
  });
}
