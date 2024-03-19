import { useContext } from "react";
import NavLi from "./NavLi";
import { NavigationContext } from "../App";
import { motion } from "framer-motion";
import Logout from "../authentification/Logout";
import { horizontal, navStyle, vertical } from "../styles/styles";

function Navigation({ spreadNavigation }) {
  const { setBurgerActive } = useContext(NavigationContext);

  return (
    <>
      <motion.nav 
      variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className={spreadNavigation ? "flex items-center gap-4" : navStyle}>
        <ul
          className={spreadNavigation ? horizontal : vertical}
          
        >
          <NavLi onClick={setBurgerActive} path="/">
            Home
          </NavLi>
          <NavLi onClick={setBurgerActive} path="/about">
            About
          </NavLi>
          <NavLi onClick={setBurgerActive} path="/reservation">
            Reservation
          </NavLi>
          <NavLi onClick={setBurgerActive} path="/contacts">
            Contacts
          </NavLi>
          <NavLi onClick={setBurgerActive} path="/galery">
            Galery
          </NavLi>
          <NavLi onClick={setBurgerActive} path="/prices">
            Prices
          </NavLi>
        </ul>
        {!spreadNavigation ? '' : <Logout />}
      </motion.nav>
    </>
  );
}

export default Navigation;
