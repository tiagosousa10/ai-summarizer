import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
  reducer: { // used to manage the state
    [articleApi.reducerPath]: articleApi.reducer 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
})
