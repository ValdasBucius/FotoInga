import { useState } from "react";
import { ClockLoader } from "react-spinners";
import { useLogin } from "../authentification/useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <form
      className="mx-auto flex flex-col justify-center gap-2 rounded-xl border p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between gap-2 text-stone-200">
        <label htmlFor="email">Email</label>
        <input
          className="px-1 text-black"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          type="email"
          autoComplete="username"
        />
      </div>
      <div className="flex justify-between gap-2 text-stone-200">
        <label htmlFor="password">Password</label>
        <input
          className="px-1 text-black"
          id="password"
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          autoComplete="current-password"
        />
      </div>

      <button
        className=" self-center bg-green-800/75 px-6 py-0.5 text-sm text-stone-200"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <ClockLoader color="#36d7b7" loading size={50} speedMultiplier={1} />
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
}

export default LoginForm;
