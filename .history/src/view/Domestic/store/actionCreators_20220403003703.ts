import * as actionTypes from "./constants";

import { demesticDataRequest } from "@/service/domesticApi/index";

// 轮播图
const changeDomesticDataAction = (res: {
  data: { banner: { list: any } };
}) => ({
  type: actionTypes.CHANGE_STATIC_GRADE,
  topBanners: res.data,
});
export const getDomesticDataAction = () => {
  return (dispatch) => {
    demesticDataRequest().then((res) => {
      dispatch(changeDomesticDataAction(res));
    });
  };
};
