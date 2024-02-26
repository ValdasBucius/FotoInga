import { useState } from "react";
import Container from "../ui/Container";
import LoginForm from "../ui/LoginForm";
import GuestOrLogin from "../ui/GuestOrLogin";
import { useUser } from "../authentification/useUser";
import Loader from "../ui/Loader";

function Login() {
  const [login, setLogin] = useState(false);
  const { isAuthenticated, isLoading } = useUser();

  return (
    <div className="relative min-h-dvh min-w-full bg-green-600/75 bg-cover bg-center bg-no-repeat">
      <Container>
        {isAuthenticated || isLoading ? (
          <Loader />
        ) : (
          <div className="flex flex-col items-center gap-4 py-32">
            <h2 className="text-stone-200">Log in to your account</h2>
            <GuestOrLogin setLogin={setLogin} />
            {login && <LoginForm />}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Login;
