import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const MainLayout = () => {

  return (
    <div>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
};
