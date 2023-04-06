import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../services/api";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
