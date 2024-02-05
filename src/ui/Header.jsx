import Navigation from "./Navigation";

function Header() {
  return (
    <div className="fixed top-0 flex w-full items-center justify-between bg-gradient-to-b from-black to-black/10 px-6 py-4">
      <div className="text-stone-200">
        <h1 className="uppercase tracking-widest">FotoInga</h1>
        <h2 className="text-[12px] tracking-tight tracking-widest">
          Catch your stunning moment
        </h2>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
