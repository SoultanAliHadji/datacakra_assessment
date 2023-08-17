import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    user: "soultan",
    destination: "Zhangye Danxia Geopark, China",
    rate: 4,
    description: "Very beautiful!",
    created_at: new Date("2023-08-17"),
  },
  {
    id: 2,
    user: "admin",
    destination: "Zhangye Danxia Geopark, China",
    rate: 2,
    description: "Quite far from city",
    created_at: new Date("2023-08-17"),
  },
];

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addReview } = reviewSlice.actions;

export default reviewSlice.reducer;
