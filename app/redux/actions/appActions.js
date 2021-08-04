import * as types from "./types";

export function setUserLoginStatus(payload) {
  return {
    type: types.SET_LOGIN_STATUS,
    payload: payload
  };
}

export function setUserLogout(payload) {
  return {
    type: types.LOG_OUT_USER,
    payload: payload
  };
}
