// Imports
import { createSlice } from "@reduxjs/toolkit";

// Slice
export interface ThemeProps {
  currentTheme: "dark" | "light";
}

const initialState: ThemeProps = {
  currentTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setCurrentTheme: (state, action: { payload: "dark" | "light" }) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setCurrentTheme } = themeSlice.actions;
export default themeSlice.reducer;
