import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value:
      window.location.pathname.length > 1
        ? window.location.pathname.slice(1)
        : "home",
  },
  reducers: {
    moveTo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { moveTo } = pageSlice.actions;

export default pageSlice.reducer;
