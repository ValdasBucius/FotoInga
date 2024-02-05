import { NavLink } from "react-router-dom";
import NavLi from "./NavLi";

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-4 tracking-wide text-stone-200">
        <NavLi path="/">Home</NavLi>
        <NavLi path="/about">About</NavLi>
        <NavLi path="/reservation">Reservation</NavLi>
        <NavLi path="/contacts">Contacts</NavLi>
        <NavLi path="/galery">Galery</NavLi>
        <NavLi path="/prices">Prices</NavLi>
      </ul>
    </nav>
  );
}

export default Navigation;
