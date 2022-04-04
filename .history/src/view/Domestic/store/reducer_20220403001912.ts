import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  demesticData: [],
});

function reducer123(
  state = defaultState,
  action: { type: any; demesticData: never[] }
) {
  switch (action.type) {
    case actionTypes.CHANGE_STATIC_GRADE:
      return state.set("CHANGE_STATIC_GRADE", action.demesticData);
    default:
      return state;
  }
}

export default reducer123;
