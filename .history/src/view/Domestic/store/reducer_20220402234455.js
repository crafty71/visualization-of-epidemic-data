import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  demesticData: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_STATIC_GRADE:
      return state.set("CHANGE_STATIC_GRADE", action.topBanners);
    default:
      return state;
  }
}

export default reducer;