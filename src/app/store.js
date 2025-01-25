import { configureStore } from "@reduxjs/toolkit";
import athanReducer from "../athanSlice";

export default configureStore({
  reducer: {
    athanApi: athanReducer,
  },
});
