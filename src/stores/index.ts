import { configureStore } from "@reduxjs/toolkit";
import sewingReducer from "./sewings/sewingSlice";

const store = configureStore({
   reducer: {
      sewing: sewingReducer,
   },
});

export default store;