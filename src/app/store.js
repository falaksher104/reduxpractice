import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Profile/userSlice";
import firstReducer from "../features/first/firstSlice";
import secondReducer from "../features/second/secondSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    first: firstReducer,
    second: secondReducer,
  },
});
