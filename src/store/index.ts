import { configureStore } from '@reduxjs/toolkit';
import books from './books';

const reducer = { books };

const store = configureStore({ reducer});

export { fetchBooks } from './books';


export type RootState = ReturnType<typeof store.getState>;
export default store;