import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: JSON?.parse(localStorage?.getItem("user")) || {},
};

const LoggedInUser = createSlice({
  name: "loggedInUser",
  initialState,
  reducers: {
    userLogedIn: (state, action) => {
      state.loggedInUser = action.payload;
      localStorage.setItem("user", JSON.stringify(state.loggedInUser));
    },
    userLogedOut: (state) => {
      state.loggedInUser = {};
      localStorage.removeItem("user");
    },
  },
});

export const { userLogedIn, userLogedOut } = LoggedInUser.actions;
export default LoggedInUser;
