import * as actionTypes from "./constants";

import { demesticDataRequest } from "@/service/domesticApi/index";

interface dispatchType {
  type: string;
  domesticData: [];
}

const changeDomesticDataAction = (res: any) => ({
  type: actionTypes.CHANGE_STATIC_GRADE,
  domesticData: res.data,
});
export const getDomesticDataAction = () => {
  return (dispatch: any) => {
    demesticDataRequest().then((res) => {
      dispatch(changeDomesticDataAction(res.data));
    });
  };
};
