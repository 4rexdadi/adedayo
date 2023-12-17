// Imports
import { createSlice } from "@reduxjs/toolkit";
import { Group } from "three";

// Slice
export interface RefsSliceProps {
  canvas: unknown;
  spaceBoy: Group | null;
}

const initialState: RefsSliceProps = {
  canvas: null,
  spaceBoy: null,
};

const refsSlice = createSlice({
  name: "refsSlice",
  initialState,
  reducers: {
    setCanvas: (state, action: { payload: HTMLCanvasElement | null }) => {
      state.canvas = action.payload;
    },
    setSpaceBoy: (state, action: { payload: Group | null }) => {
      state.spaceBoy = action.payload;
    },
  },
});

export const { setCanvas, setSpaceBoy } = refsSlice.actions;
export default refsSlice.reducer;
