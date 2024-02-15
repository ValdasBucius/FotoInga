import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditReservation } from "../services/supabaseApi";
import FormItem from "./FormItem";
import useCreateReservation from "../features/reservations/useCreateReservation";
import useEditReservation from "../features/reservations/useEditReservation";

function AppointmentForm({
  onSelectedDay,
  onReservationToEdit = {},
  onSetCreate,
  onSetEdit,
  onEdit,
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
      <form
        className="items-left flex flex-col justify-center gap-3 p-4 pt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-xl">
          {!onEdit ? "Create" : "Edit"} appointment on{" "}
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
          <input
            className="rounded-md px-1 text-black"
            id="start"
            {...register("start", { required: "This is required" })}
            type="text"
            placeholder="Enter start..."
          />
        </FormItem>

        <FormItem label="Event ends at" error={errors.end?.message}>
          <input
            className="rounded-md px-1 text-black"
            id="end"
            disabled={isCreating || isEditing}
            {...register("end", { required: "This is required" })}
            type="text"
            placeholder="Enter end..."
          />
        </FormItem>

        <FormItem label="Hour Price" error={errors.price?.message}>
          <input
            className="rounded-md px-1 text-black"
            id="price"
            disabled={isCreating || isEditing}
            {...register("price", { required: "This is required" })}
            type="number"
            placeholder="Enter price..."
          />
        </FormItem>

        <FormItem label="Price for fuel" error={errors.fuel?.message}>
          <input
            className="rounded-md px-1 text-black"
            id="fuel"
            disabled={isCreating || isEditing}
            {...register("fuel", { required: "This is required" })}
            type="text"
            placeholder="Enter fuel..."
          />
        </FormItem>

        <FormItem
          label="How long your services are needed?"
          error={errors.hours?.message}
        >
          <input
            className="rounded-md px-1 text-black"
            id="hours"
            disabled={isCreating || isEditing}
            {...register("hours", { required: "This is required" })}
            type="number"
            placeholder="Enter hours..."
          />
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

        <div className="flex justify-center gap-2">
          <button
            className="rounded-md border p-2 text-lg tracking-widest duration-300 hover:bg-black/75"
            type="submit"
            disabled={isCreating || isEditing}
          >
            {onEdit ? "Edit reservation" : "Create new Reservation"}
          </button>

          <button
            className="rounded-md border p-2 text-lg tracking-widest duration-300 hover:bg-black/75"
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
