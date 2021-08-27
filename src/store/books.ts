import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BookItem, BookSearchResult } from '../types/books';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (bookname: string) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookname}&key=${process.env.REACT_APP_API_KEY}`);
      const data: BookSearchResult = response.data;
      return {
        totalItems: data.totalItems,
        items: data.items,
        loading: "loaded"
      } as BooksState;
    }
    catch (err) {
      return err;
    }
  }
)

interface BooksState {
  totalItems: number;
  items: BookItem[];
  loading: "loaded" | "pending" | "error";
}

const initialState: BooksState = {
  totalItems: 0,
  items: [],
  loading: "loaded"
}

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = "pending";
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.loading = "error";
    })
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      return action.payload;
    })
  }

});

export default books.reducer;
