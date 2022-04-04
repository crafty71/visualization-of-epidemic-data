import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState: Map<string, never[]> = Map({
  demesticData: [],
});

function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("demesticData", action.topBanners);
    default:
      console.log(action.type);
      return state;
  }
}

export default reducer;
