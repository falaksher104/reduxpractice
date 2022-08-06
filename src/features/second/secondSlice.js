import { createSlice } from "@reduxjs/toolkit";

export const secondSlice = createSlice({
  name: "second",
  initialState: {
    second: {
      title: null,
      desc:null,
      price:null
    },
    secondBtn: false
  },
  

  reducers: {
    secondSubmit: (state, action) => {
          state.second = action.payload;
    },
    secondDelete: (state) => {
      state.second = null;
    },
    secondBtnSubmit: (state,action) => {
      state.secondBtn = action.payload;
    },
  },
});

export const { secondSubmit, secondDelete,secondBtnSubmit } = secondSlice.actions;
export const selectsecond = (state) => state.second.second;
export const selectsecondBtn = (state) => state.second.secondBtn;

export default secondSlice.reducer;
