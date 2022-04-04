import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState: Map<string, never[]> = Map({
  demesticData: [],
});

function reducer(
  state = defaultState,
  action: { type: any; domesticDatas: never[] }
) {
  switch (action.type) {
    case actionTypes.CHANGE_STATIC_GRADE:
      return state.set("demesticData", action.domesticDatas);
    default:
      return state;
  }
}

export default reducer;
