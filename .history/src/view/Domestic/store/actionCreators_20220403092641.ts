import * as actionTypes from "./constants";

import { demesticDataRequest } from "@/service/domesticApi/index";

interface dispatchType {
  type: string;
  domesticData: { banner: { list: any } };
}

const changeDomesticDataAction = (res: {
  data: { banner: { list: any } };
}) => ({
  type: actionTypes.CHANGE_STATIC_GRADE,
  domesticData: res.data,
});
export const getDomesticDataAction = () => {
  return (dispatch: (arg0: dispatchType) => void) => {
    demesticDataRequest().then((res) => {
      dispatch(changeDomesticDataAction(res.data));
    });
  };
};
