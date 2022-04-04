import * as actionTypes from "./constants";

import { demesticDataRequest } from "@/service/domesticApi/index";

const changeDomesticDataAction = (res: any) => ({
  type: actionTypes.CHANGE_STATIC_GRADE,
  domesticData: res.data.data,
});
export const getDomesticDataAction = () => {
  return (dispatch: any) => {
    demesticDataRequest().then((res) => {
      console.log(res.data.data);
      dispatch(changeDomesticDataAction(res));
    });
  };
};
