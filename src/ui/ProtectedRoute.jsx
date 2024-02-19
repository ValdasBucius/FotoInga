import { useNavigate } from "react-router-dom";
import { useUser } from "../authentification/useUser";
import Loader from "./Loader";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading) return <Loader />;
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
