import * as types from "./types";

export function setUserLoginStatus(payload) {
  return {
    type: types.SET_LOGIN_STATUS,
    payload: payload
  };
}
