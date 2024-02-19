import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { LogedContext } from "../App";
import { useContext } from "react";
import Login from "../pages/Login";

function AppLayout() {
  const { loged, setLoged } = useContext(LogedContext);

  return (
    <>
      {loged ? (
        <div className="relative">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default AppLayout;
