import { MdLogout } from "react-icons/md";
import { useLogout } from "./useLogout";
import { ClockLoader } from "react-spinners";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { isAuthenticated, isLoading } = useUser();
  const { logout } = useLogout();
  const navigate = useNavigate();

  return isAuthenticated ? (
    <button disabled={isLoading} onClick={logout}>
      {isLoading ? (
        <ClockLoader />
      ) : (
        <MdLogout className="text-green-600 duration-300 hover:text-red-600" />
      )}
    </button>
  ) : (
    <button
      disabled={isLoading}
      onClick={() => navigate("/login")}
      className="text-[14px] text-green-600 duration-300 hover:text-green-200"
    >
      {isLoading ? <ClockLoader /> : "Login"}
    </button>
  );
}

export default Logout;
