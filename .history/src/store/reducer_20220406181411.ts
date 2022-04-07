import { combineReducers } from "redux-immutable";

import { reducer as Demoesticreducer } from "@/view/Domestic/store/index";
import { reducer as abroadReducer } from "@/view/Abroad/store/index";
// import { reducer as playerReducer } from '../pages/player/store';

const cReducer = combineReducers({
  demestic: Demoesticreducer,
  // player: playerReducer
});

export default cReducer;
