import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReservation as deleteReservationApi } from "../../services/supabaseApi";
import { toast } from "react-toastify";

function useDeleteReservation() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteReservation } = useMutation({
    mutationFn: deleteReservationApi,
    onSuccess: () => {
      toast.success("Reservation successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["reservations"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteReservation, isDeleting };
}

export default useDeleteReservation;
