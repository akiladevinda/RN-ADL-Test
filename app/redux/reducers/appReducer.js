import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import Constants from "../../config/constants";

const initialState = {
  connectivityStatus: true,
  connectivityStrength: '',//Constants.connectivityStrength.average,
  
  selectedLanguage: "en",
  selectedTheme: "light",

  fullScreenLoaderShow: false,
  fullScreenLoaderText: "",
};

export const appReducer = createReducer(initialState, {
  [types.UPDATE_CONNECTIVITY_STATUS](state, action) {
    return {
      ...state,
      connectivityStatus: action.payload
    };
  },
  [types.UPDATE_CONNECTIVITY_STRENGTH](state, action) {
    return {
      ...state,
      connectivityStrength: action.payload
    };
  },
  [types.SHOW_LOADER_MODAL](state, action) {
    return {
      ...state,
      fullScreenLoaderShow: true,
      fullScreenLoaderText: action.payload
    };
  },
  [types.HIDE_LOADER_MODAL](state) {
    return {
      ...state,
      fullScreenLoaderShow: false,
      fullScreenLoaderText: ""
    };
  },
  [types.UPDATE_APP_THEME](state, action) {
    return {
      ...state,
      selectedTheme: action.payload
    };
  }
});
