import { format } from "date-fns";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function AppointmentForm({
  onSelectedDay,
  onAddAppointment,
  onDateToEdit,
  onCreate,
  onEdit,
  onSetCreate,
  onSetEdit,
  onFinalEditFunction,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, reset },
  } = useForm({
    defaultValues: {
      id: onDateToEdit ? onDateToEdit[0].id : Math.random(),
      date: format(onSelectedDay, "yyyy-MM-dd"),
      name: onDateToEdit ? onDateToEdit[0].name : "",
      imageUrl: onDateToEdit ? onDateToEdit[0].imageUrl : "",
      location: onDateToEdit ? onDateToEdit[0].location : "",
      note: onDateToEdit ? onDateToEdit[0].note : "",
      price: onDateToEdit ? onDateToEdit[0].price : "",
      fuel: onDateToEdit ? onDateToEdit[0].fuel : "",
      hours: onDateToEdit ? onDateToEdit[0].hours : "",
      start: onDateToEdit ? onDateToEdit[0].start : "",
      end: onDateToEdit ? onDateToEdit[0].end : "",
    },
  });

  return (
    <>
      <form
        className="items-left flex flex-col justify-center gap-3 bg-black/50 p-4 pt-16 text-black "
        onSubmit={handleSubmit((data) => {
          onDateToEdit ? onFinalEditFunction(data) : onAddAppointment(data);
          onSetEdit(false);
          onSetCreate(false);
        })}
      >
        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="name">Name</label>
          <input
            className="rounded-md px-1"
            id="name"
            {...register("name", { required: "This is required" })}
            type="text"
            placeholder="Enter name..."
          />
          {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="imageUrl">Enter image url</label>
          <input
            className="rounded-md px-1"
            id="imageUrl"
            {...register("imageUrl", { required: "This is required" })}
            type="text"
            placeholder="Enter imageUrl..."
          />
          {errors.imageUrl?.message && <p>{errors.imageUrl?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="location">Location</label>
          <input
            className="rounded-md px-1"
            id="location"
            {...register("location", { required: "This is required" })}
            type="text"
            placeholder="Enter location..."
          />
          {errors.location?.message && <p>{errors.location?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="start">Event starts at</label>
          <input
            className="rounded-md px-1"
            id="start"
            {...register("start", { required: "This is required" })}
            type="text"
            placeholder="Enter start..."
          />
          {errors.start?.message && <p>{errors.start?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="end">Event ends at</label>
          <input
            className="rounded-md px-1"
            id="end"
            {...register("end", { required: "This is required" })}
            type="text"
            placeholder="Enter end..."
          />
          {errors.end?.message && <p>{errors.end?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="price">Hour price</label>
          <input
            className="rounded-md px-1"
            id="price"
            {...register("price", { required: "This is required" })}
            type="number"
            placeholder="Enter price..."
          />
          {errors.price?.message && <p>{errors.price?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="fuel">Price for fuel</label>
          <input
            className="rounded-md px-1"
            id="fuel"
            {...register("fuel", { required: "This is required" })}
            type="text"
            placeholder="Enter fuel..."
          />
          {errors.fuel?.message && <p>{errors.fuel?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="hours">How long your services are needed?</label>
          <input
            className="rounded-md px-1"
            id="hours"
            {...register("hours", { required: "This is required" })}
            type="number"
            placeholder="Enter hours..."
          />
          {errors.hours?.message && <p>{errors.hours?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="note">Note</label>
          <textarea
            className="rounded-md px-1"
            id="note"
            {...register("note")}
            type="number"
            placeholder="Enter note..."
          />
          {errors.note?.message && <p>{errors.note?.message}</p>}
        </div>

        <input
          className="rounded-md bg-stone-200 py-2 text-lg tracking-widest"
          type="submit"
          value={`${onCreate ? "Create" : "Edit"}`}
        />
      </form>
    </>
  );
}

export default AppointmentForm;
