import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditReservation } from "../../services/supabaseApi";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function useEditReservation() {
  const queryClient = useQueryClient();

  const { mutate: editReservation, isLoading: isEditing } = useMutation({
    mutationFn: ({ newReservationData, id }) =>
      createEditReservation(newReservationData, id),
    onSuccess: () => {
      toast.success("Reservation edited ");
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editReservation, isEditing };
}

export default useEditReservation;
