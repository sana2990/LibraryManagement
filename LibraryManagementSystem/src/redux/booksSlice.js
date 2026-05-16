import { createSlice } from "@reduxjs/toolkit";

import { fictionalBooks } from "../utils/fictionalBooks";
import { thrillerBooks } from "../utils/thrillerBooks";
import { motivationalBooks } from "../utils/motivationalBooks";
import { sciFiBooks } from "../utils/sciFiBooks";

const defaultBooks = [
  ...fictionalBooks,
  ...thrillerBooks,
  ...motivationalBooks,
  ...sciFiBooks
];

const savedBooks = localStorage.getItem("books");

const initialState = {
  books: savedBooks
    ? JSON.parse(savedBooks)
    : defaultBooks
};

const booksSlice = createSlice({
  name: "books",

  initialState,

  reducers: {

    addBook: (state, action) => {

      state.books.push(action.payload);

      localStorage.setItem(
        "books",
        JSON.stringify(state.books)
      );
    }

  }
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;