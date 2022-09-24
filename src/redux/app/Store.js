import { configureStore } from "@reduxjs/toolkit";
import LoggedInUser from "../features/loggedinuser/LoggedInUser";

const Store = configureStore({
  reducer: {
    loggedInUser: LoggedInUser.reducer,
  },
});

export default Store;
