import * as types from "./types";

export function updateShoppingCart(payload) {
  return {
    type: types.ADD_TO_CART,
    payload: payload
  };
}
