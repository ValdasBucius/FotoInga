import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "./useUser";

function PrivateRoutes() {
  const { isAuthenticated } = useUser();
  return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
}

export default PrivateRoutes;
