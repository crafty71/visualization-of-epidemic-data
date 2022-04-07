import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState: any = Map({
  WomWorldData: [],
});

function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_WOW_WORLD:
      console.log(action.WomWorldData);
      return state.set("WomWorldData", action.WomWorldData);
    default:
      return state;
  }
}

export default reducer;
