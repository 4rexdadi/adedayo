// Imports
import { createSlice } from "@reduxjs/toolkit";

// Slice
export interface CursorProps {
  cursorType: "pointer" | "hovered" | "locked";
}

const initialState: CursorProps = {
  cursorType: "pointer",
};

const cursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    setCursorType: (
      state,
      action: { payload: "pointer" | "hovered" | "locked" }
    ) => {
      state.cursorType = action.payload;
    },
  },
});

export const { setCursorType } = cursorSlice.actions;
export default cursorSlice.reducer;
