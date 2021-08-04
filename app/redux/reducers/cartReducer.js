import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import Constants from "../../config/constants";

const initialState = {
  userCart : [],
};

export const cartReducer = createReducer(initialState, {
    [types.ADD_TO_CART](state, action) {
        return {
          ...state,
          userCart: [...state.userCart, action.payload]
        };
    },
    
    [types.REMOVE_FROM_CART](state, action) {
      return {
        ...state,
        userCart: state.userCart.filter(userCart => userCart.id !== action.payload) 
      };
  },
});
