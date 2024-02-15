import Button from "../ui/Button";
import Container from "../ui/Container";
import about1 from "../data/About1.jpg";
import about2 from "../data/About2.jpg";
import about3 from "../data/About3.jpg";
function About() {
  return (
    <div className="absolute top-0 -z-20 min-h-screen min-w-full bg-background3">
      <Container>
        <div className="pb-[40px] pt-[80px] text-center text-stone-200">
          <h2 className="text-left text-[30px] uppercase tracking-widest">
            About me
          </h2>

          <div className="grid gap-3 lg:grid-cols-3 lg:grid-rows-2">
            <div className="flex flex-col gap-3 rounded-lg border border-black/75 lg:col-span-2 lg:items-center">
              <img
                className="rounded-lg border-black/75 "
                src={about1}
                alt="photographer"
              />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur aliquam impedit tenetur, repellat, veritatis
                possimus odio qui repudiandae quo doloremque facere aliquid
                nostrum dolore harum voluptatibus, eius libero. Vel, culpa!
              </p>
            </div>
            <div className="flex hidden flex-col items-end justify-center rounded-lg border border-black">
              <p className="px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                maiores provident ipsum repellat doloremque. Tempora ea esse
              </p>
            </div>
            <div className="rounded-lg border border-black">
              <img
                className="rounded-lg border-black/75"
                src={about3}
                alt="photographer photo2"
              />
              <p className="px-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus, impedit aspernatur. Minima voluptas quibusdam
                voluptate facere quod eum, nostrum corrupti! Esse vitae corrupti
                laboriosam odio obcaecati, ea et quam id?
              </p>
            </div>
            <div className="col-span-2 flex hidden items-center rounded-lg border border-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              minus, autem fugiat vel nobis quas exercitationem perferendis
              sequi deserunt, mollitia ut expedita. Repudiandae, illo iusto?
              Voluptatibus qui at repellat quaerat. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Qui debitis praesentium fugiat
              libero impedit corporis repudiandae itaque, eius fugit eligendi
              earum laudantium nulla tempora odio at. Accusantium nihil
              consequuntur ad.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
