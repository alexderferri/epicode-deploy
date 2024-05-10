import React from "react";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom/dist";

export default function LogoutButton() {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");

    localStorage.removeItem("token");

    navigate("/");
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}
