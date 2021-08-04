/*
 * combines all th existing reducers
 */
import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { cartReducer } from "./cartReducer";
import { movieReducer } from "./movieReducer";


//export default Object.assign(AppReducer, AuthReducer, UserReducer);
const rootReducer = combineReducers({
  appReducer: appReducer,
  movieReducer:movieReducer,
  cartReducer:cartReducer
});

const rootReducerWrapper = (state, action) => {
    //REST APP LOGICS
  return rootReducer(state, action);
};

export default rootReducerWrapper;
