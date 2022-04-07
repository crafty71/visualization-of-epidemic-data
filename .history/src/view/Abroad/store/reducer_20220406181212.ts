import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState: any = Map({
  demesticData: [],
  WomWorldData: [],
});

function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_STATIC_GRADE:
      return state.set("demesticData", action.domesticDatas);
    case actionTypes.CHANGE_WOW_WORLD:
      return state.set("WomWorldData", action.WomWorldData);
    default:
      return state;
  }
}

export default reducer;
