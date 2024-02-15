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

export async function createEditReservation(newReservation, id) {
  console.log(newReservation);
  console.log(id);
  //Creating/Edit reservation
  let query = supabase.from("reservations");
  //A) Create
  if (!id) query = query.insert([newReservation]);

  //B) Edit
  if (id) query = query.update({ ...newReservation }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error(
      id
        ? "Reservation could not be edited"
        : "Reservation could not be created",
    );
  }

  return data;
}
