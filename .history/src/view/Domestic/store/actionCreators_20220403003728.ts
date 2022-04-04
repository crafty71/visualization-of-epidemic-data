import * as actionTypes from "./constants";

import { demesticDataRequest } from "@/service/domesticApi/index";

// 轮播图
const changeDomesticDataAction = (res: {
  data: { banner: { list: any } };
}) => ({
  type: actionTypes.CHANGE_STATIC_GRADE,
  domesticData: res.data,
});
export const getDomesticDataAction = () => {
  return (
    dispatch: (arg0: {
      type: string;
      domesticData: { banner: { list: any } };
    }) => void
  ) => {
    demesticDataRequest().then((res) => {
      dispatch(changeDomesticDataAction(res));
    });
  };
};
