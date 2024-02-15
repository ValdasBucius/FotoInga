import NavLi from "./NavLi";

function Navigation() {
  return (
    <nav className="bg-gradient-to-t from-black to-black/10 py-4">
      <ul className="flex flex-col items-center justify-center gap-4 text-center tracking-wide text-stone-200">
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
