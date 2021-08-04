/*
 * combines all th existing reducers
 */
import { combineReducers } from "redux";
import { appReducer } from "./appReducer";


//export default Object.assign(AppReducer, AuthReducer, UserReducer);
const rootReducer = combineReducers({
  appReducer: appReducer
});

const rootReducerWrapper = (state, action) => {
    //REST APP LOGICS
  return rootReducer(state, action);
};

export default rootReducerWrapper;
