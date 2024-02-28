import { format } from "date-fns";
import { useForm } from "react-hook-form";

import FormItem from "./FormItem";
import useCreateReservation from "../features/reservations/useCreateReservation";
import useEditReservation from "../features/reservations/useEditReservation";
import { priceIntervals, timeIntervals } from "../utils/helpers";

import { motion } from "framer-motion";
import CreateEditButtons from "./CreateEditForm/CreateEditButtons";

function AppointmentForm({
  onSelectedDay,
  onReservationToEdit = {},
  onSetCreate,
  onSetEdit,
  onEdit,
}) {
  const { id: editId, ...editValues } = onReservationToEdit;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
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

  return (
    <motion.form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.1 }}
    >
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
          {...register("end", {
            required: "This is required",
            validate: (value) =>
              value > getValues().start ||
              "The start time cannot be earlier than the end time",
          })}
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
          {...register("fuel")}
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

      <CreateEditButtons
        onEdit={onEdit}
        onSetCreate={onSetCreate}
        onSetEdit={onSetEdit}
        isCreating={isCreating}
        isEditing={isEditing}
      />
    </motion.form>
  );
}

export default AppointmentForm;
