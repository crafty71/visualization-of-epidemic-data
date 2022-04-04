import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  topBanners: [],
  goodList: [],
  goodListTpye: "pop",
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOME_GOODLIST:
      return state.set("goodList", action.goodList);
    default:
      return state;
    case actionTypes.CHANGE_HOME_GOODLIST_TYPE:
      return state.set("goodListTpye", action.goodListTpye);
  }
}

export default reducer;
