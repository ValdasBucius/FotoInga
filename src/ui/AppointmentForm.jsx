import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditReservation } from "../services/supabaseApi";
import FormItem from "./FormItem";
import useCreateReservation from "../features/reservations/useCreateReservation";
import useEditReservation from "../features/reservations/useEditReservation";
import { priceIntervals, timeIntervals } from "../utils/helpers";

function AppointmentForm({
  onSelectedDay,
  onReservationToEdit = {},
  onSetCreate,
  onSetEdit,
  onEdit,
  selectedDayMeetings,
}) {
  const { id: editId, ...editValues } = onReservationToEdit;
  // const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: onEdit
      ? editValues
      : { date: format(onSelectedDay, "yyyy-MM-dd") },
  });

  const { createReservation, isCreating } = useCreateReservation(
    onSetEdit,
    onSetCreate,
  );
  const { editReservation, isEditing } = useEditReservation(
    onSetEdit,
    onSetCreate,
  );
  function onSubmit(data) {
    onEdit
      ? editReservation(
          { newReservationData: data, id: editId },
          {
            onSuccess: () => {
              reset();
              onSetEdit(false);
              onSetCreate(false);
            },
          },
        )
      : createReservation(data, {
          onSuccess: (data) => {
            reset();
            onSetEdit(false);
            onSetCreate(false);
            console.log(data);
          },
        });
  }

  function handleCancel() {
    onSetCreate(false);
    onSetEdit(false);
  }

  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-md text-green-400">
          {!onEdit ? "Create" : "Edit"} appointment on <br />
          {format(onSelectedDay, "yyyy MMM d")}
        </h3>

        <FormItem error={errors?.name?.message} label="Name">
          <input
            className="rounded-md px-1 text-black"
            id="name"
            {...register("name", { required: "This is required" })}
            type="text"
            disabled={isCreating || isEditing}
            placeholder="Enter name..."
          />
        </FormItem>

        <FormItem label="Event location" error={errors.location?.message}>
          <input
            className="rounded-md px-1 text-black"
            id="location"
            {...register("location", { required: "This is required" })}
            type="text"
            disabled={isCreating || isEditing}
            placeholder="Enter location..."
          />
        </FormItem>

        <FormItem label="Event starts at" error={errors.start?.message}>
          <select
            disabled={isCreating || isEditing}
            className="rounded-md px-1 text-black"
            id="start"
            {...register("start", { required: "This is required" })}
          >
            {timeIntervals().map((time) => (
              <option value={time}>{time}</option>
            ))}
          </select>
        </FormItem>

        <FormItem label="Event ends at" error={errors.end?.message}>
          <select
            disabled={isCreating || isEditing}
            className="rounded-md px-1 text-black"
            id="end"
            {...register("end", { required: "This is required" })}
          >
            {timeIntervals().map((time) => (
              <option value={time}>{time}</option>
            ))}
          </select>
        </FormItem>

        <FormItem label="Price per hour" error={errors.price?.message}>
          <select
            disabled={isCreating || isEditing}
            className="rounded-md px-1 text-black"
            id="price"
            {...register("price", { required: "This is required" })}
          >
            {priceIntervals().map((price) => (
              <option value={Number(price)}>{price}</option>
            ))}
          </select>
        </FormItem>

        <FormItem label="Price per fuel" error={errors.fuel?.message}>
          <select
            disabled={isCreating || isEditing}
            className="rounded-md px-1 text-black"
            id="fuel"
            {...register("fuel", { required: "This is required" })}
          >
            {priceIntervals().map((price) => (
              <option value={Number(price)}>{price}</option>
            ))}
          </select>
        </FormItem>

        <FormItem label="Note" error={errors.note?.message}>
          <textarea
            className="rounded-md px-1 text-black"
            id="note"
            disabled={isCreating || isEditing}
            {...register("note")}
            type="number"
            placeholder="Enter note..."
          />
        </FormItem>

        <div className="flex gap-2 text-center">
          <button
            className="rounded-md border border-black bg-green-800/75 px-2 text-sm tracking-widest duration-300 hover:bg-green-800/25"
            type="submit"
            disabled={isCreating || isEditing}
          >
            {onEdit ? "Edit reservation" : "Create new Reservation"}
          </button>

          <button
            className="rounded-md border border-black bg-red-800/75 px-2 py-1 text-sm tracking-widest duration-300 hover:bg-red-800/25"
            onClick={handleCancel}
            type="reset"
            disabled={isCreating || isEditing}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default AppointmentForm;
