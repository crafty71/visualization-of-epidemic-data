import * as actionTypes from "./constants";

import { demesticDataRequest } from "@/service/domesticApi/index.ts";

// 轮播图
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.data.banner.list,
});
export const getTopBannerAction = () => {
  return (dispatch) => {
    demesticDataRequest().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
