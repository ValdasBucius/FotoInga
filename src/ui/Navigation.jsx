import NavLi from "./NavLi";
import burger from "../data/Icons/navigation.svg";
import { useState } from "react";

function Navigation() {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <nav>
      {/* <ul className="flex gap-4 tracking-wide text-stone-200">
        <NavLi path="/">Home</NavLi>
        <NavLi path="/about">About</NavLi>
        <NavLi path="/reservation">Reservation</NavLi>
        <NavLi path="/contacts">Contacts</NavLi>
        <NavLi path="/galery">Galery</NavLi>
        <NavLi path="/prices">Prices</NavLi>
      </ul> */}
      <button onClick={() => setBurgerActive((state) => !state)}>
        <img src={burger} alt="burger menu" />
      </button>
    </nav>
  );
}

export default Navigation;
