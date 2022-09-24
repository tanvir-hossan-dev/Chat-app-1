import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HomePage from "./components/pages/HomePage";
import MessagePage from "./components/pages/MessagePage";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import PublicRoute from "./components/publicrouter/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/inbox/message"
          element={
            <PrivateRoute>
              <MessagePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/inbox/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
