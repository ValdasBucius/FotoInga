import instagram from "../data/instagram.svg";
import messenger from "../data/messenger.svg";
import facebook from "../data/facebook.svg";
import gmail from "../data/gmail.svg";

import Container from "../ui/Container";
import { NavigationContext } from "../App";
import { useContext } from "react";
function Contacts() {
  const { burgerActive } = useContext(NavigationContext);

  return (
    <div className="absolute top-0 -z-20 min-h-dvh min-w-full bg-background bg-cover bg-center bg-no-repeat">
      <Container>
        <div
          className={`${!burgerActive ? "pt-[80px]" : "pt-[320px]"} text-center text-stone-200`}
        >
          <h2 className="mb-2 text-left text-[30px] uppercase tracking-widest">
            Find me in
          </h2>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 pb-12">
            <div className="flex flex-col items-center gap-3 rounded-lg border py-4 duration-500 hover:bg-pink-200/25">
              <h3 className="text-lg tracking-wider">Instagram</h3>
              <img src={instagram} alt="Instagram logo" />
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border py-4 duration-500 hover:bg-blue-200/25">
              <h3 className="text-lg tracking-wider">Facebook</h3>
              <img src={facebook} alt="Facebook logo" />
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border py-4 duration-500 hover:bg-pink-200/25">
              <h3 className="text-lg tracking-wider">Messenger</h3>
              <img src={messenger} alt="Messenger logo" />
            </div>
            <div className="col-span-3 mt-6 flex flex-col items-center gap-3 rounded-lg border py-4 duration-500 hover:bg-blue-200/25">
              <h3 className="text-lg tracking-wider">Gmail</h3>
              <img src={gmail} alt="Gmail logo" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contacts;
