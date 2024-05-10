import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import ProtectedAuthRoute from "./components/ProtectedAuthRoute";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedAuthRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
