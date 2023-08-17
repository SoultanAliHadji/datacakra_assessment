import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "superadmin",
    email: "superadmin@example.com",
    password: "password",
    role: "superadmin",
    token: "superadmin-token",
  },
  {
    id: 2,
    name: "admin",
    email: "admin@example.com",
    password: "password",
    role: "admin",
    token: "admin-token",
  },
  {
    id: 3,
    name: "user",
    email: "user@example.com",
    password: "password",
    role: "user",
    token: "user-token",
  },
  {
    id: 4,
    name: "soultan",
    email: "soultan@example.com",
    password: "password",
    role: "user",
    token: "soultan-token",
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editRole: (state, action) => {
      state[action.payload.index] = action.payload;
    },
  },
});

export const { addUser, editRole } = userSlice.actions;

export default userSlice.reducer;
