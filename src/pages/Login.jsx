import { useState } from "react";
import Container from "../ui/Container";
import LoginForm from "../ui/LoginForm";
import GuestOrLogin from "../ui/GuestOrLogin";

function Login() {
  const [guest, setGuest] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <div className="relative min-h-dvh min-w-full bg-green-600/75 bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="flex flex-col items-center gap-4 py-32">
          <h2 className="text-stone-200">Log in to your account</h2>
          <GuestOrLogin setGuest={setGuest} setLogin={setLogin} />
          {login && <LoginForm />}
        </div>
      </Container>
    </div>
  );
}

export default Login;
