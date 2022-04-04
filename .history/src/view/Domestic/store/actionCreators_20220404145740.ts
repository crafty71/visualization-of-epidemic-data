import * as actionTypes from "./constants";

import { demesticDataRequest } from "@/service/domesticApi/index";

const changeDomesticDataAction = (res: { data: { data: any } }) => ({
  type: actionTypes.CHANGE_STATIC_GRADE,
  domesticDatas: res.data.data,
});
export const getDomesticDataAction = () => {
  return (dispatch: (arg0: { type: string; domesticDatas: any }) => void) => {
    demesticDataRequest().then((res) => {
      dispatch(changeDomesticDataAction(res));
    });
  };
};

const changechinaDayListAction = ((res)=>{
    type: actionTypes.CHINA_DAY_LIST,
    chinaDayList: res.data.chinaDayList
})
