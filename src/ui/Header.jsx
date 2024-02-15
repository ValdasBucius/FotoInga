import Navigation from "./Navigation";

function Header() {
  return (
    <header className="fixed top-0 flex w-full items-center justify-between bg-gradient-to-b from-black to-black/10 px-4 py-2">
      <div className="text-stone-200">
        <h1 className="text-sm uppercase tracking-widest">FotoInga</h1>
        <h2 className="text-[10px] tracking-tight tracking-widest">
          Catch your stunning moment
        </h2>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
