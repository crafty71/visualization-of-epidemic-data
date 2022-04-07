import Request from "../index";

// /automation/modules/list?modules=WomWorld

export function getWomWorld() {
  return Request.get({
    url: "/automation/modules/list?modules=WomWorld",
  });
}

// /automation/modules/list?modules=WomAboard

export function getWomAboard() {
  return Request.get({
    url: "/automation/modules/list?modules=WomAboard",
  });
}
