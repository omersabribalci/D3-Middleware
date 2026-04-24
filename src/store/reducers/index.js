import { combineReducers } from 'redux';
import {
  SET_MOVIES,
  ADD_FAVORITES,
  DELETE_FAVORITES,
  NEXT_PAGE,
  PREVIOUS_PAGE,
} from '../actions';

import { movies } from '../../data';

//  Movies Reducer
const moviesInitialState = {
  movies: movies,
};

const moviesReducer = (state = moviesInitialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };

    case ADD_FAVORITES:
      return {
        ...state,
        movies: state.movies.filter((m) => m.id !== action.payload.id),
      };

    case DELETE_FAVORITES:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    default:
      return state;
  }
};

//  Favorites Reducer
const favoritesInitialState = {
  favorites: [],
};

const favoritesReducer = (state = favoritesInitialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };

    case DELETE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (fav) => fav.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

//  Order Reducer
const orderInitialState = {
  order: 0,
};

const orderReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, order: state.order + 1 };
    case PREVIOUS_PAGE:
      return { ...state, order: state.order - 1 };
    default:
      return state;
  }
};

//  Root Reducer
const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
  order: orderReducer,
});

export default rootReducer;
