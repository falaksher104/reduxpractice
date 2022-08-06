import { createSlice } from "@reduxjs/toolkit";

export const firstSlice = createSlice({
  name: "first",
  initialState: {
    first: {
      name: null,
      email:null,
      age:null
    },
  },

  reducers: {
    firstLogin: (state, action) => {
          state.first = action.payload;
    },
    // firstDelete: (state) => {
    firstDelete: (state,action) => {
        state.first = action.payload;
        // state.first = null;
    },
  },
});

export const { firstLogin, firstDelete } = firstSlice.actions;
export const selectFirst = (state) => state.first.first;

export default firstSlice.reducer;
