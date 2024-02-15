import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditReservation } from "../../services/supabaseApi";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function useCreateReservation() {
  const queryClient = useQueryClient();

  const { mutate: createReservation, isLoading: isCreating } = useMutation({
    mutationFn: createEditReservation,
    onSuccess: () => {
      toast.success("New reservation created ");
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createReservation, isCreating };
}

export default useCreateReservation;
