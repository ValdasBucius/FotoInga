import { MdLogout } from "react-icons/md";
import { useLogout } from "./useLogout";
import { ClockLoader } from "react-spinners";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button disabled={isLoading} onClick={logout}>
      {!isLoading ? (
        <MdLogout className="text-stone-200 duration-300 hover:text-pink-400/75" />
      ) : (
        <ClockLoader color="#36d7b7" loading size={50} speedMultiplier={1} />
      )}
    </button>
  );
}

export default Logout;
