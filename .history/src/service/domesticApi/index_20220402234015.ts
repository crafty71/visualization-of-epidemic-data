import Request from "../index";

export function demesticDataRequest() {
  return Request.get({
    url: "/list?modules=statisGradeCityDetail,diseaseh5Shelf",
  });
}
