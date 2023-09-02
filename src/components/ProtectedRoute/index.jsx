import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to={props.redirect} />;
}
