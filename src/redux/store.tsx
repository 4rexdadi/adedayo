// Import
import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./features/contactSlice";
import cursorReducer from "./features/cursorSlice";
import refsReducer from "./features/refsSlice";
import themeReducer from "./features/themeSlice";

const store = configureStore({
  reducer: {
    cursorSlice: cursorReducer,
    contactSlice: contactReducer,
    themeSlice: themeReducer,
    refsSlice: refsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: process.env.NODE_ENV !== "production",
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
