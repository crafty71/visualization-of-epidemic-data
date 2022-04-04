import { combineReducers } from "redux-immutable";

import { reducer as HomeReducer } from "@/views/home/store/index";
// import { reducer as playerReducer } from '../pages/player/store';

const cReducer = combineReducers({
  recommend: HomeReducer,
  // player: playerReducer
});

export default cReducer;
