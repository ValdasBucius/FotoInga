import supabase from "./supabase";

export async function getReservations() {
  const { data, error } = await supabase.from("reservations").select("*");
  if (error) {
    throw new Error("Reservations could not be loaded");
  }

  return data;
}
