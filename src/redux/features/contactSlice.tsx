// Imports
import { createSlice } from "@reduxjs/toolkit";

// Slice
export interface ContactProps {
  showContactPopup: boolean;
}

const initialState: ContactProps = {
  showContactPopup: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setShowContactPopup: (state, action: { payload: boolean }) => {
      state.showContactPopup = action.payload;
    },
  },
});

export const { setShowContactPopup } = contactSlice.actions;
export default contactSlice.reducer;
