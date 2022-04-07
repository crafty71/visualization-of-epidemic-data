import Request from "../index";

export function demesticDataRequest() {
  return Request.get({
    url: "/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf",
  });
}

export function getchinaDayList() {
  return Request.get({
    url: "/inner/publish/modules/list?modules=chinaDayList",
  });
}

// /list?modules=chinaDayAddList

export function getchinaDayAddList() {
  return Request.get({
    url: "/modules/list?modules=chinaDayAddList",
  });
}

export function getChinaProvience(provience: any) {
  return Request.get({
    url: `/publish/daily/list?province=${provience}`,
  });
}
