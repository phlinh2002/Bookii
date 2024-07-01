// src/redux/slices/booksSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Book,fetchBooks,addBooks } from '../domain/books'

interface BooksState {
  items: Book[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BooksState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchBooksAsync = createAsyncThunk(
  'books/fetchBooks',
  async (page: number) => {
    const response = await fetchBooks(page);
    return response;
  }
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBooksAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export default booksSlice.reducer;
