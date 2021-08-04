import * as types from "./types";

export function filteeMovieByCategory(payload) {
  return {
    type: types.FILER_MOVIE_BY_CATEGORY,
    payload: payload
  };
}

