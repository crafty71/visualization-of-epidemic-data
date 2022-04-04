import { combineReducers } from "redux-immutable";

import Demoesticreducer from "@/view/Domestic/index";
// import { reducer as playerReducer } from '../pages/player/store';

const cReducer = combineReducers({
  demestic: Demoesticreducer,
  // player: playerReducer
});

export default cReducer;
