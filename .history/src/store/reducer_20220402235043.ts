import { combineReducers } from "redux-immutable";

import { reducer as HomeReducer } from "@/view/Domestic/index";
// import { reducer as playerReducer } from '../pages/player/store';

const cReducer = combineReducers({
  demestic: HomeReducer,
  // player: playerReducer
});

export default cReducer;
