import * as actionTypes from "./constants";

import { getWomWorld, getWomAboard } from "@/service/abroadApi/index";

const changeWomWorldAction = (res: any) => ({
  type: actionTypes.CHANGE_WOW_WORLD,
  WomWorldData: res.data.data.WomWorld,
});

export const WomWorldDataAction = () => {
  return (dispatch: any) => {
    getWomWorld().then((res) => {
      dispatch(changeWomWorldAction(res));
    });
  };
};

const changeWomAboardAvtion = (res: any) => ({
  type: actionTypes.CHANGE_WOM_ABOARD,
  WomAboard: res.data.data.WomAboard,
});

export const WomAboardDataAction = () => {
  return (dispatch: any) => {
    getWomAboard().then((res) => {
      dispatch(changeWomAboardAvtion(res));
    });
  };
};
