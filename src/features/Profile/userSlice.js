import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: null,
    },
  },

  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    deleteLogin: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, deleteLogin } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
