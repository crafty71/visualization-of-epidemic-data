import Request from "../index";

// /automation/modules/list?modules=WomWorld

export function getWomWorld() {
  return Request.get({
    url: "/automation/modules/list?modules=WomWorld",
  });
}
