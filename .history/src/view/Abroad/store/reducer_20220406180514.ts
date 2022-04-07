import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState: any = Map({
  demesticData: [],
  chinaDayList: [],
  chinaDayAddList: [],
  chinaProvienceData: [],
});

function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_STATIC_GRADE:
      return state.set("demesticData", action.domesticDatas);
    default:
      return state;
  }
}

export default reducer;
