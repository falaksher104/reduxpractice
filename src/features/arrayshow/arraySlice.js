import { createSlice } from "@reduxjs/toolkit";

export const arraySlice = createSlice({
  name: "array",
  initialState: {
    arrayShow: [],
  },

  reducers: {
    AddKeywords: (state, action) => {
      console.log({ action, state });
      //   state.arrayShow = action.payload;
      state.arrayShow.push(action.payload);
    },
    DeleteKeywords: (state) => {
      state.arrayShow = [];
    },
    // secondBtnSubmit: (state, action) => {
    //   state.secondBtn = action.payload;
    // },
  },
});

export const { AddKeywords, DeleteKeywords } = arraySlice.actions;
export const selectKeyword = (state) => state.array.arrayShow;
// export const selectsecondBtn = (state) => state.array.array;

export default arraySlice.reducer;
