import { useContext, useState } from "react";
import Navigation from "./Navigation";
import burger from "../data/Icons/navigation.svg";
import activeBurger from "../data/Icons/closeNavigation.svg";
import { NavigationContext } from "../App";

function Header() {
  const { burgerActive, setBurgerActive } = useContext(NavigationContext);
  return (
    <>
      <header className="flex items-center justify-between bg-gradient-to-b from-black to-black/10 px-4 py-2">
        <div className="text-stone-200">
          <h1 className="text-sm uppercase tracking-widest">FotoInga</h1>
          <h2 className="text-[10px] tracking-widest">
            Catch your stunning moment
          </h2>
        </div>
        <button onClick={() => setBurgerActive((state) => !state)}>
          <img src={burgerActive ? activeBurger : burger} alt="burger menu" />
        </button>
      </header>

      {burgerActive && <Navigation />}
    </>
  );
}

export default Header;
