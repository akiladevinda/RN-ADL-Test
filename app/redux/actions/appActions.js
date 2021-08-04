import * as types from "./types";

export function updateConnectivityStatus(payload) {
  return {
    type: types.UPDATE_CONNECTIVITY_STATUS,
    payload: payload
  };
}

export function updateConnectivityStrength(payload) {
  return {
    type: types.UPDATE_CONNECTIVITY_STRENGTH,
    payload: payload
  };
}

export function showFullScreenLoader(payload) {
  return {
    type: types.SHOW_LOADER_MODAL,
    payload: payload
  };
}

export function hideFullScreenLoader() {
  return {
    type: types.HIDE_LOADER_MODAL
  };
}

export function updateAppTheme(theme) {
  return {
    type: types.UPDATE_APP_THEME,
    payload: theme
  };
}