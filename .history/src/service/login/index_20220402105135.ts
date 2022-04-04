import Request from "../index";

export function accountLoginRequest() {
  return Request.get({
    url: "/home/data?type=sell&page=1",
  });
}
