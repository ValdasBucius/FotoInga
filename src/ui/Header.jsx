import { useContext, useEffect } from "react";
import Navigation from "./Navigation";
import burger from "../data/Icons/navigation.svg";
import activeBurger from "../data/Icons/closeNavigation.svg";
import { NavigationContext } from "../App";
import useWindowSize from "../hooks/useWindowSize";
import { Link } from "react-router-dom";

function Header() {
  const { burgerActive, setBurgerActive } = useContext(NavigationContext);
  const [height, width] = useWindowSize();
  const spreadNavigation = width >= 650;
  const headerStyle = `bg-gradient-to-b from-black to-black/10 px-4 py-2 flex justify-between items-center`;

  useEffect(() => {
    if (spreadNavigation) {
      setBurgerActive(false);
    }
  }, [spreadNavigation, setBurgerActive]);
  return (
    <>
      <header className={headerStyle}>
        <Link to="/">
          <div className="text-stone-200">
            <h1 className="text-sm uppercase tracking-widest">FotoInga</h1>
            <h2 className="text-[10px] tracking-widest">
              Catch your stunning moment
            </h2>
          </div>
        </Link>

        {spreadNavigation ? (
          <Navigation spreadNavigation={spreadNavigation} />
        ) : (
          <button onClick={() => setBurgerActive((state) => !state)}>
            <img src={burgerActive ? activeBurger : burger} alt="burger menu" />
          </button>
        )}
      </header>

      {burgerActive && <Navigation spreadNavigation={spreadNavigation} />}
    </>
  );
}

export default Header;
