import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState: any = Map({
  demesticData: [],
  chinaDayList: [],
  chinaDayAddList: [],
});

function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_STATIC_GRADE:
      return state.set("demesticData", action.domesticDatas);
    case actionTypes.CHINA_DAY_LIST:
      return state.set("chinaDayList", action.chinaDayList);
    default:
      return state;
  }
}

export default reducer;
