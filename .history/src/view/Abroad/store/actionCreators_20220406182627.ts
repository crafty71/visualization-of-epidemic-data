import * as actionTypes from "./constants";

import { getWomWorld } from "@/service/abroadApi/index";

const changeWomWorldAction = (res: any) => ({
  type: actionTypes.CHANGE_WOW_WORLD,
  WomWorldData: res.data.data,
});

export const WomWorldDataAction = () => {
  return (dispatch: any) => {
    getWomWorld().then((res) => {
      dispatch(changeWomWorldAction(res));
    });
  };
};
