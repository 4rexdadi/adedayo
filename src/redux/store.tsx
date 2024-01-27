// Import
import { configureStore } from "@reduxjs/toolkit";

import cursorReducer from "./features/cursorSlice";
import refsReducer from "./features/refsSlice";
import scrollReducer from "./features/scrollSlice";

const store = configureStore({
  reducer: {
    cursorSlice: cursorReducer,
    scrollSlice: scrollReducer,
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
