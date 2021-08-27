import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BookItem, BookSearchResult } from '../types/books';

type RequestOptions = {
  bookName: string;
  startIndex?: number;
}


export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (requestOptions: RequestOptions) => {
    try {
      const { bookName, startIndex = 0 } = requestOptions;
      const request = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${process.env.REACT_APP_API_KEY}&maxResults=16&startIndex=${startIndex}`;
      const response = await axios.get(request);
      const data: BookSearchResult = response.data;
      if (response.status !== 200){
        throw new Error("Something bad happend!");
      }
      return {
        totalItems: data.totalItems,
        // Because google could randomly forget to give use even []
        items: data.items || [],
        loading: "loaded",
        searchName: bookName
      } as BooksState;
    }
    catch (err) {
      // We throw error here for redux to recognize that error happends
      throw new Error(err);
    }
  }
)

interface BooksState {
  totalItems: number;
  searchName: string;
  items: BookItem[];
  loading: "loaded" | "pending" | "error";
}

const initialState: BooksState = {
  totalItems: 0,
  searchName: '',
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
      return {...state, ...action.payload};
    })
  }

});

export default books.reducer;
