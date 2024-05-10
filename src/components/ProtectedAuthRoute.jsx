import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export default function ProtectedAuthRoute() {
  const { authenticated } = useContext(AuthContext);

  return authenticated ? <Outlet /> : <Navigate to="/" />;
}
