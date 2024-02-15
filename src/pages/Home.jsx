import { useContext } from "react";
import Button from "../ui/Button";
import { NavigationContext } from "../App";

function Home() {
  const { burgerActive } = useContext(NavigationContext);

  return (
    <div className="absolute top-0 -z-20 min-h-screen min-w-full bg-background bg-center bg-no-repeat">
      <div
        className={`${burgerActive && "pt-[320px]"} pt-[220px] text-center text-stone-200`}
      >
        <h1 className="text-[40px] uppercase tracking-widest">FotoInga</h1>
        <h2 className="text-md mb-8 mt-[-6px] capitalize">
          Professional Lithuanian Photographer
        </h2>
        <Button location="/about">Get Started</Button>
      </div>
    </div>
  );
}

export default Home;
