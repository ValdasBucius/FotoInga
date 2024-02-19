import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import { useContext } from "react";
import { LogedContext } from "../App";
import { toast } from "react-toastify";

export function useLogin() {
  const { loged, setLoged } = useContext(LogedContext);

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      console.log(user);
      setLoged(true);
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error(`Provided email or password are incorrect`);
    },
  });
  return { login, isLoading };
}
