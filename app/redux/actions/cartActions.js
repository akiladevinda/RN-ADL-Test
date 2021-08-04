import * as types from "./types";

export function updateShoppingCart(payload) {
  return {
    type: types.ADD_TO_CART,
    payload: payload
  };
}

export function removeFromCart(payload) {
  return {
    type: types.REMOVE_FROM_CART,
    payload: payload
  };
}
