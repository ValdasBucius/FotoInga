import { GiSpy } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";

function GuestOrLogin({ setGuest, setLogin }) {
  return (
    <div className="flex gap-4 ">
      <div
        onClick={() => setLogin((state) => !state)}
        className="flex flex-col items-center gap-2 rounded-xl border p-4 duration-300 hover:bg-green-200"
      >
        <BsPersonCircle size="5rem" />
        Sing in
      </div>
      <div
        onClick={() => setGuest(true)}
        className="flex flex-col items-center gap-2 rounded-xl border p-4 duration-300 hover:bg-green-200"
      >
        <GiSpy size="5rem" />
        Continue <br /> as a guest
      </div>
    </div>
  );
}

export default GuestOrLogin;
