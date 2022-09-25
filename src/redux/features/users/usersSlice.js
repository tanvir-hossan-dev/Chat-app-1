import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default usersSlice.reducer;

export const { getUsers } = usersSlice.actions;
