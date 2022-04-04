import Request from "../index";

export function demesticDataRequest() {
  return Request.get({
    url: "/home/data?type=sell&page=1",
  });
}
