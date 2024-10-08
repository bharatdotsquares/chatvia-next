import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "@/redux/features/AuthSlice"
const store = configureStore({
  reducer: {
    auth:AuthReducer
  }, 
});

export default store