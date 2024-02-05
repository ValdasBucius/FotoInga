import { NavLink } from "react-router-dom";
import Container from "../ui/Container";
import birthday from "../data/galery/Children.jpg";
import family from "../data/galery/Family.jpg";
import pregnant from "../data/galery/Pregnant.jpg";
import weddings from "../data/galery/Weddings.jpg";
import couple from "../data/galery/Couple.jpg";
import personal from "../data/galery/Personal.jpg";
import christering from "../data/galery/Christering.jpg";
import baby from "../data/galery/baby.jpg";

function Galery() {
  return (
    <div className="w-full bg-background1 bg-cover bg-center bg-no-repeat pt-[120px] text-center text-stone-200">
      <Container>
        <h2 className="text-left text-[48px] uppercase tracking-widest">
          Galery
        </h2>

        <ul className="grid grid-cols-4 grid-rows-2 gap-2 rounded-lg border border-black px-3 py-3 pb-12">
          <li className="bg-black">
            <NavLink className="relative" to="/galery/birthdays">
              <img
                src={birthday}
                className="rounded-lg duration-500 hover:blur-[2px]"
                alt="childrens birthday"
              />
              <p className="absolute right-[50%] top-[50%] w-full text-lg text-white">
                Children's birthday
              </p>
            </NavLink>
          </li>

          <NavLink className="relative" to="/galery/family">
            <img
              src={family}
              className="rounded-lg duration-500 hover:blur-[2px]"
              alt="family"
            />
            <p className="absolute top-[50%] w-full text-lg text-white">
              Family Photo Session
            </p>
          </NavLink>

          <NavLink className="relative" to="/galery/pregnancy">
            <img
              src={pregnant}
              className="rounded-lg duration-500 hover:blur-[2px]"
              alt="pregnant woman"
            />
            <p className="absolute top-[50%] w-full text-lg text-white">
              Pregnancy
            </p>
          </NavLink>

          <NavLink className="relative" to="/galery/weddings">
            <img
              src={weddings}
              className="rounded-lg duration-500 hover:blur-[2px]"
              alt="weddings"
            />
            <p className="absolute top-[50%] w-full text-lg text-white drop-shadow-xl">
              Weddings
            </p>
          </NavLink>

          <NavLink className="relative" to="/galery/couple">
            <img
              src={couple}
              className="rounded-lg duration-500 hover:blur-[2px]"
              alt="weddings"
            />
            <p className="absolute top-[50%] w-full text-lg text-white drop-shadow-xl">
              Couple Photo Sessions
            </p>
          </NavLink>

          <NavLink className="relative" to="/galery/personal">
            <img
              src={personal}
              className="rounded-lg duration-500 hover:blur-[2px]"
              alt="weddings"
            />
            <p className="absolute top-[50%] w-full text-lg text-white drop-shadow-xl">
              Personal Photo Session
            </p>
          </NavLink>

          <NavLink className="relative" to="/galery/christering">
            <img
              src={christering}
              className="rounded-lg duration-500 hover:blur-[2px]"
              alt="christering"
            />
            <p className="absolute top-[50%] w-full text-lg text-white drop-shadow-xl">
              Christering
            </p>
          </NavLink>

          <NavLink className="relative" to="/galery/babies">
            <img
              src={baby}
              className="duration-500 hover:blur-[2px]"
              alt="baby"
            />
            <p className="absolute top-[50%] w-full text-lg text-white drop-shadow-xl">
              Babies
            </p>
          </NavLink>
        </ul>
      </Container>
    </div>
  );
}

export default Galery;
