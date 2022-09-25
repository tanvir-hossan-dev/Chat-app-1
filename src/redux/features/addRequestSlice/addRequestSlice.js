import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addRequests: [],
};

const addRequestSlice = createSlice({
  name: "addRequestst",
  initialState,
  reducers: {
    getAddRequests: (state, action) => {
      state.addRequests = action.payload;
    },
  },
});

export default addRequestSlice.reducer;

export const { getAddRequests } = addRequestSlice.actions;
