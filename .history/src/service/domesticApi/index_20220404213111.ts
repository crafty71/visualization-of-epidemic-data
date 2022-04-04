import Request from "../index";

export function demesticDataRequest() {
  return Request.get({
    url: "/list?modules=statisGradeCityDetail,diseaseh5Shelf",
  });
}

export function getchinaDayList() {
  return Request.get({
    url: "/list?modules=chinaDayList",
  });
}

// /list?modules=chinaDayAddList

export function getchinaDayAddList() {
  return Request.get({
    url: "/list?modules=chinaDayAddList",
  });
}
