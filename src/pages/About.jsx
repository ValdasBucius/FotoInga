import Button from "../ui/Button";
import Container from "../ui/Container";
import about1 from "../data/About1.jpg";
import about4 from "../data/about4.jpg";
import { useContext } from "react";
import { NavigationContext } from "../App";
function About() {
  const { burgerActive } = useContext(NavigationContext);

  return (
    <div className="absolute top-0 -z-20 min-h-dvh min-w-full bg-background3 bg-cover bg-center bg-no-repeat">
      <Container>
        <div
          className={`pb-[40px] ${!burgerActive ? "pt-[80px]" : "pt-[320px]"} text-center text-stone-200`}
        >
          <h2 className="text-left text-[30px] uppercase tracking-widest">
            About me
          </h2>
          <div className="relative mb-2">
            <img className="max-w-[70%]" src={about1} alt="photograher" />

            <p className="absolute left-24 top-8 bg-gradient-to-l from-black/75 to-transparent p-2 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              provident fugiat reprehenderit similique veritatis voluptates,
              minima molestiae.
            </p>
          </div>

          <div className="relative flex justify-end text-stone-200">
            <img className="max-w-[70%]" src={about4} alt="photograher" />

            <p className="absolute bottom-12 left-0 bg-gradient-to-r from-black/75 to-transparent p-2 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              provident fugiat reprehenderit similique veritatis voluptates,
              minima molestiae.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
