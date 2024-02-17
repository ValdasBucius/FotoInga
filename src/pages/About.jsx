import Button from "../ui/Button";
import Container from "../ui/Container";
import about1 from "../data/About1.jpg";
import about2 from "../data/About2.jpg";
import about3 from "../data/About3.jpg";
function About() {
  return (
    <div className="absolute top-0 -z-20 min-h-dvh min-w-full bg-background3 bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="pb-[40px] pt-[80px] text-center text-stone-200">
          <h2 className="text-left text-[30px] uppercase tracking-widest">
            About me
          </h2>
          <div>
            <img className="max-w-48" src={about1} alt="photograher" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
