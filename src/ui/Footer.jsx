import messenger from "../data/messenger.svg";
import fb from "../data/facebook.svg";
import instagram from "../data/instagram.svg";
function Footer() {
  return (
    <>
      <div className="fixed bottom-0 flex w-full justify-between bg-gradient-to-t from-black to-black/10 px-4 py-2">
        <div className="flex max-w-6 gap-3">
          <img src={fb} alt="facebook icon" />
          <img src={instagram} alt="instagram icon" />
          <img src={messenger} alt="messenger icon" />
        </div>
        <p className="text-sm text-stone-200">©Valdas Bučius</p>
      </div>
    </>
  );
}

export default Footer;
