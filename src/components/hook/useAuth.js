import { useSelector } from "react-redux";

const useAuth = () => {
  const { loggedInUser } = useSelector((state) => state.loggedInUser);
  if (loggedInUser.uid) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
