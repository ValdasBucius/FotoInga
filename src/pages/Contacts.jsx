import instagram from "../data/instagram.svg";
import messenger from "../data/messenger.svg";
import facebook from "../data/facebook.svg";
import gmail from "../data/gmail.svg";

import Container from "../ui/Container";
function Contacts() {
  return (
    <div className="h-dvh w-full bg-background2 bg-cover bg-center bg-no-repeat pt-[120px] text-center text-stone-200">
      <Container>
        <h2 className="text-left text-[48px] uppercase tracking-widest">
          Find me in
        </h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
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
      </Container>
    </div>
  );
}

export default Contacts;
