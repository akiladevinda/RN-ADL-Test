import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import Constants from "../../config/constants";

const initialState = {
  moviesArray : [ 
    {id:1, name: "Fast and Furious",},
    {id:2, name: "Kong vs Godzilla", },
    {id:3, name: "Hitman", },
    {id:4, name: "Venom", },
    {id:5, name: "Batman", },
    {id:6, name: "Avengers", },
    ],
};

export const movieReducer = createReducer(initialState, {
  
});
