/* eslint-disable */
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import booksReducer from './books/Books';
import catagoriesReducer from './categories/Categories';

const rootReducer = combineReducers({
  books: booksReducer,
  catagories: catagoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;