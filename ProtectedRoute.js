import React from "react";
import { Redirect, Route } from "react-router-dom";
import DashboardClient from "./pages/Dashboard/Client/DashboardClient";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("roles");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? (isAuthenticated==='admin' ? <Component {...props} /> : <DashboardClient/>): <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
