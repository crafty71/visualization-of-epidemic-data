import { combineReducers } from "redux-immutable";

import reducer from "@/view/Domestic/index";
// import { reducer as playerReducer } from '../pages/player/store';

const cReducer = combineReducers({
  demestic: reducer,
  // player: playerReducer
});

export default cReducer;
