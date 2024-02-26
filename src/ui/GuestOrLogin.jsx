import { GiSpy } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../authentification/useUser";

function GuestOrLogin({ setLogin }) {
  const navigate = useNavigate();
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
        onClick={() => navigate("/home")}
        className="flex flex-col items-center gap-2 rounded-xl border p-4 duration-300 hover:bg-green-200"
      >
        <GiSpy size="5rem" />
        Continue <br /> as a guest
      </div>
    </div>
  );
}

export default GuestOrLogin;
