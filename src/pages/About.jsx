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
            <img
              className="max-w-[70%] md:max-w-[40%] lg:max-w-[30%]"
              src={about1}
              alt="photograher"
            />

            <p className="md:text-md absolute left-24 top-8 bg-gradient-to-l from-black/75 to-transparent p-2 text-sm sm:left-48 lg:left-[15%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              provident fugiat reprehenderit similique veritatis voluptates,
              minima molestiae.
            </p>
            <p className="absolute left-[16%] top-[80%] hidden bg-gradient-to-r from-black/75 to-transparent p-2 text-sm sm:block sm:text-lg md:left-[5%] md:top-[83%] md:text-lg lg:left-[17%] lg:from-black/50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="relative flex justify-end text-stone-200">
            <img
              className="max-w-[70%] md:max-w-[50%] lg:max-w-[25%]"
              src={about4}
              alt="photograher"
            />
            <p className="md:text-md lg-left-[15%] absolute left-[0%] top-[5%] hidden bg-gradient-to-r from-black/75 to-transparent p-2 text-center text-sm sm:block lg:left-[43%] lg:from-black/50">
              Eveniet, modi vel officiis veniam, et sapiente delectus voluptatem
              magni facere rerum necessitatibus.
            </p>
            <p className="md:text-md absolute bottom-[12%] left-0 bg-gradient-to-r from-black/75 to-transparent p-2 text-sm sm:text-sm md:left-[30%] lg:left-[70%] lg:bg-gradient-to-l ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Fugiat atque,
              nam quidem earum dolore totam rem.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
