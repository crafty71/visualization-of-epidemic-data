import * as actionTypes from "./constants";

import {
  demesticDataRequest,
  getchinaDayList,
  getchinaDayAddList,
} from "@/service/domesticApi/index";

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

const changechinaDayListAction = (res: any) => ({
  type: actionTypes.CHINA_DAY_LIST,
  chinaDayList: res.data.data.chinaDayList,
});

export const getgetchinaDayListAction = () => {
  return (dispatch: any) => {
    getchinaDayList().then((res) => {
      dispatch(changechinaDayListAction(res));
    });
  };
};

const changegetchinaDayAddListAction = (res: any) => ({
  type: actionTypes.CHINA_ADD_DAY_LIST,
  chinaDayAddList: res.data.data.chinaDayAddList,
});

export const getchinaDayAddListAvtion = () => {
  return (dispatch) => {
    getchinaDayAddList().then((res) => {
      dispatch(changegetchinaDayAddListAction);
    });
  };
};
