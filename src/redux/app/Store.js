import { configureStore } from "@reduxjs/toolkit";
import addRequestSlice from "../features/addRequestSlice/addRequestSlice";
import friendRequestSlice from "../features/friendRequest/friendRequestSlice";
import friendsSlice from "../features/friends/friendsSlice";
import LoggedInUser from "../features/loggedinuser/LoggedInUser";
import usersSlice from "../features/users/usersSlice";

const Store = configureStore({
  reducer: {
    loggedInUser: LoggedInUser.reducer,
    users: usersSlice,
    addRequests: addRequestSlice,
    friendRequest: friendRequestSlice,
    friends: friendsSlice,
  },
});

export default Store;
