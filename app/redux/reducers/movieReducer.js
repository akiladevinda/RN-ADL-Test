import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import Constants from "../../config/constants";

const initialState = {
  moviesArray : [ 
    {id:1, name: "Fast and Furious", category: "Action"},
    {id:2, name: "Kong vs Godzilla",category: "Shooting" },
    {id:3, name: "Hitman", category: "Shooting"},
    {id:4, name: "Venom", category: "Action"},
    {id:5, name: "Batman", category: "Crime"},
    {id:6, name: "Avengers", category: "Crime"},
    {id:7, name: "Bodyguard", category: "Crime"},
    ],
};

export const movieReducer = createReducer(initialState, {
  [types.FILER_MOVIE_BY_CATEGORY](state, action) {
    return {
      ...state,
      moviesArray: state.moviesArray.filter(moviesArray => moviesArray.category === action.payload) 
    };
  },
});
