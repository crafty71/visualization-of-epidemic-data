import * as actionTypes from "./constants";

import { getHomeMultiData } from "@/service/domesticApi/index.ts";

// 轮播图
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.data.banner.list,
});
export const getTopBannerAction = () => {
  return (dispatch) => {
    getHomeMultiData().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
