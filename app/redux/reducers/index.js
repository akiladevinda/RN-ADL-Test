/*
 * combines all th existing reducers
 */
import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { cartReducer } from "./cartReducer";
import { movieReducer } from "./movieReducer";
import * as types from '../actions/types';

//export default Object.assign(AppReducer, AuthReducer, UserReducer);
const rootReducer = combineReducers({
  appReducer: appReducer,
  movieReducer:movieReducer,
  cartReducer:cartReducer
});

const rootReducerWrapper = (state, action) => {
  console.log("🚀 ~ file: index.js ~ line 18 ~ rootReducerWrapper ~ action", action)
    //LOG OUT APP LOGICS
    if (action.type === types.LOG_OUT_USER) {
      var {
        appReducer,
        cartReducer,
      } = state;
      (appReducer = {
        ...appReducer,
        isUserLoggedIn: false,
      });
      (cartReducer = {
        ...cartReducer,
        userCart: [],
      });
      state = undefined;
      state = { appReducer,cartReducer};
    }
  return rootReducer(state, action);
};

export default rootReducerWrapper;
