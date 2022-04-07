import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState: any = Map({
  WomWorldData: [],
  WomAboard: [],
});

function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_WOW_WORLD:
      return state.set("WomWorldData", action.WomWorldData);
    case actionTypes.CHANGE_WOM_ABOARD:
      return state.set("WomAboard", action.WomAboard);
    default:
      return state;
  }
}

export default reducer;
