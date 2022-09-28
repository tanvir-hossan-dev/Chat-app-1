import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
};

const friendsSlice = createSlice({
  name: "addRequestst",
  initialState,
  reducers: {
    getFriends: (state, action) => {
      state.friends = action.payload;
    },
  },
});

export default friendsSlice.reducer;

export const { getFriends } = friendsSlice.actions;
