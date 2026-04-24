//  Movies Actions
export const SET_MOVIES = 'SET_MOVIES';
export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});

//  Favorites Actions
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const DELETE_FAVORITES = 'DELETE_FAVORITES';

export const addFavorites = (movie) => ({
  type: ADD_FAVORITES,
  payload: movie,
});

export const deleteFavorites = (movie) => ({
  type: DELETE_FAVORITES,
  payload: movie,
});

//  Order Actions
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';

export const nextPage = () => ({ type: NEXT_PAGE });
export const previousPage = () => ({ type: PREVIOUS_PAGE });
