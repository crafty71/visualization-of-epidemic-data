import { Map } from "immutable";

import * as actionTypes from "./constants";

interface actionType {
  type: any;
  demesticData: never[];
}

const defaultState = Map({
  demesticData: [],
});

function reducer(state = defaultState, action: actionType) {
  switch (action.type) {
    case actionTypes.CHANGE_STATIC_GRADE:
      return state.set("CHANGE_STATIC_GRADE", action.demesticData);
    default:
      return state;
  }
}

export default reducer;
