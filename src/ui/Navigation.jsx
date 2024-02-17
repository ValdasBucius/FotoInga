import { useContext } from "react";
import NavLi from "./NavLi";
import { NavigationContext } from "../App";

function Navigation() {
  const { setBurgerActive } = useContext(NavigationContext);

  return (
    <nav className="bg-gradient-to-t from-black to-black/10 py-4">
      <ul className="flex flex-col items-center justify-center gap-4 text-center tracking-wide text-stone-200">
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
    </nav>
  );
}

export default Navigation;
