import { useContext } from "react";
import NavLi from "./NavLi";
import { NavigationContext } from "../App";
import { motion } from "framer-motion";

function Navigation({ spreadNavigation }) {
  const { setBurgerActive } = useContext(NavigationContext);
  const horizontal = `flex gap-4 text-sm text-[#f4f4f4]`;
  const vertical = `flex flex-col items-center justify-center gap-4 text-center tracking-wide text-[#f4f4f4]`;
  const navStyle = `bg-gradient-to-t from-black to-black/10 py-4`;
  return (
    <motion.nav
      className={spreadNavigation ? "" : navStyle}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate="visible"
    >
      <ul className={spreadNavigation ? horizontal : vertical}>
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
    </motion.nav>
  );
}

export default Navigation;
