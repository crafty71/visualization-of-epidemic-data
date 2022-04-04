import * as actionTypes from "./constants";

import { getHomeMultiData, getHomeGoodsData } from "@/services/homerequest.js";

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
// 商品详情列表
const changeGoodListAction = (res) => ({
  type: actionTypes.CHANGE_HOME_GOODLIST,
  goodList: res.data.list,
});

export const getGoodListAction = (type,page=1) => {
  return (dispatch) => {
    getHomeGoodsData(type, page).then((res) => {
      dispatch(changeGoodListAction(res));
    });
  };
};

// getHomeGoodsData type

export const changeGoodListTypeAction = (type) => ({
  type: actionTypes.CHANGE_HOME_GOODLIST_TYPE,
  goodListTpye: type,
});
