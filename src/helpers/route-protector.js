import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoutes() {
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem("user"));

  return currentUser?._id ? (
    <Outlet />
  ) : (
    <Navigate to={`/login`} state={{ from: location }} replace />
  );
}

export function BugProtector() {
  const location = useLocation();
  const bugTimer = parseInt(localStorage.getItem("bugTimer"));

  return !bugTimer ? (
    <Outlet />
  ) : (
    <Navigate to={`/waitingscreen`} state={{ from: location }} replace />
  );
}

export function SolutionProtector() {
  const location = useLocation();
  const solTimer = parseInt(localStorage.getItem("solTimer"));

  return !solTimer ? (
    <Outlet />
  ) : (
    <Navigate to={`/`} state={{ from: location }} replace />
  );
}

// export function ThankProtector() {
//   const location = useLocation();
//   const currentUser = parseInt(localStorage.getItem("user"));
//   const codeStatus = parseInt(localStorage.getItem("codeStatus"));

//   return !currentUser?.accessToken ? (
//     <Navigate to={`/`} state={{ from: location }} replace />
//   ) : codeStatus ? (
//     <Outlet />
//   ) : (
//     <Navigate
//       to={`/${currentUser?.slotID}/problem`}
//       state={{ from: location }}
//       replace
//     />
//   );
// }

export function RedirectRoutes() {
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem("user"));

  return !currentUser?._id ? (
    <Outlet />
  ) : (
    <Navigate to={`/instructions`} state={{ from: location }} replace />
  );
}
