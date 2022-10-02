import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userUid: null,
};

const messageUserSlice = createSlice({
  name: "messageUserSlice",
  initialState,
  reducers: {
    getMessgeUserUid: (state, action) => {
      state.userUid = action.payload;
    },
  },
});

export default messageUserSlice.reducer;

export const { getMessgeUserUid } = messageUserSlice.actions;
