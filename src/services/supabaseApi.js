import supabase from "./supabase";

export async function getReservations() {
  const { data, error } = await supabase.from("reservations").select("*");
  if (error) {
    throw new Error("Reservations could not be loaded");
  }

  return data;
}

export async function deleteReservation(id) {
  const { error, data } = await supabase
    .from("reservations")
    .delete()
    .eq("id", id);
  if (error) {
    throw new Error("Reservation could not be deleted");
  }
  return data;
}
