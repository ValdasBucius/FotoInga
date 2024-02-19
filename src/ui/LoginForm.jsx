import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../services/apiAuth";
import { useLogin } from "../authentification/useLogin";
import ClipLoader from "react-spinners/ClipLoader";
import { ClockLoader } from "react-spinners";

function LoginForm() {
  const [email, setEmail] = useState("fotoinga@example.com");
  const [password, setPassword] = useState("bandymas");

  const { login, isLoading } = useLogin();
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <form
      className="mx-auto flex flex-col justify-center gap-2 border p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between gap-2 text-stone-200">
        <label htmlFor="email">Email</label>
        <input
          className="px-1 text-black"
          id="email"
          onChange={handleEmail}
          disabled={isLoading}
          // {...register("email", { required: "This is required" })}
          type="text"
          // onChange={handleHoursQuantity}
          placeholder="Enter username..."
        />
        {/* {errors.email?.message && <p>{errors.email?.message}</p>} */}
      </div>
      <div className="flex justify-between gap-2 text-stone-200">
        <label htmlFor="password">Password</label>
        <input
          className="px-1 text-black"
          id="password"
          disabled={isLoading}
          onChange={handlePassword}
          // {...register("password", { required: "This is required" })}
          type="text"
          // onChange={handleHoursQuantity}
          placeholder="Enter password..."
        />
        {/* {errors.password?.message && <p>{errors.password?.message}</p>} */}
      </div>

      <button
        className=" self-center bg-green-800/75 px-6 py-0.5 text-sm text-stone-200"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <ClockLoader color="#05df31a6" /> : "Login"}
      </button>
    </form>
  );
}

export default LoginForm;
