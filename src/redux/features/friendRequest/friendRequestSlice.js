import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friendRequest: [],
};

const friendRequestSlice = createSlice({
  name: "addRequestst",
  initialState,
  reducers: {
    getFriendRequest: (state, action) => {
      state.friendRequest = action.payload;
    },
  },
});

export default friendRequestSlice.reducer;

export const { getFriendRequest } = friendRequestSlice.actions;
