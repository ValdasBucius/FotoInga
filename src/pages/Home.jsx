import { useContext } from "react";
import Button from "../ui/Button";
import { NavigationContext } from "../App";

function Home() {
  const { burgerActive } = useContext(NavigationContext);

  return (
    <div className="absolute top-0 -z-20 min-h-dvh min-w-full bg-background3 bg-cover bg-center bg-no-repeat">
      <div
        className={`${burgerActive && "pt-[320px]"} pt-[220px] text-center text-stone-200`}
      >
        <h1 className="text-3xl uppercase tracking-widest sm:text-5xl">
          FotoInga
        </h1>
        <h2 className="sm:text-md mb-8 text-sm capitalize">
          Professional Lithuanian Photographer
        </h2>
        <Button location="/about">Get Started</Button>
      </div>
    </div>
  );
}

export default Home;
