import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import Constants from "../../config/constants";

const initialState = {
  isUserLoggedIn: false,
};

export const appReducer = createReducer(initialState, {
  [types.SET_LOGIN_STATUS](state, action) {
    return {
      ...state,
      isUserLoggedIn: action.payload
    };
  },
});
