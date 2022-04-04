import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState: Map<string, never[]> = Map({
  demesticData: [],
});

function reducer(state: Map<string, never[]> = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_STATIC_GRADE:
      console.log(action.demesticData, "124");
      return state.set("CHANGE_STATIC_GRADE", action.demesticData);
    default:
      console.log(action.type);

      return state;
  }
}

export default reducer;
