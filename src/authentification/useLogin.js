import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/home", { replace: true });
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error(`Provided email or password are incorrect`);
    },
  });
  return { login, isLoading };
}
