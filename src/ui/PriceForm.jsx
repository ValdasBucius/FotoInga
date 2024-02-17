import { useState } from "react";
import { Form, useForm } from "react-hook-form";

const eventsList = [
  "weddings",
  "christering",
  "personal photosession",
  "family photosession",
  "couple photosession",
  "children birthday",
  "pregnancy",
  "baby photosession",
];

function PriceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hours: 1,
      event: eventsList[0],
      phone: 370,
    },
  });

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   const newSubmit = {
  //     event,
  //     hours,
  //   };
  //   console.log(newSubmit);
  // };

  return (
    <>
      <form
        className="items-left flex flex-col justify-center gap-3 bg-black/50 p-4 pt-16 text-black "
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="name">Name</label>
          <input
            className="rounded-md px-1"
            id="name"
            {...register("name", { required: "This is required" })}
            type="text"
            // onChange={handleHoursQuantity}
            placeholder="Enter name..."
          />
          {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="surname">Surname</label>
          <input
            className="rounded-md px-1"
            id="surname"
            {...register("surname", { required: "This is required" })}
            type="text"
            // onChange={handleHoursQuantity}
            placeholder="Enter surname..."
          />
          {errors.surname?.message && <p>{errors.surname?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="phone">Phone number</label>
          <input
            className="rounded-md px-1"
            id="phone"
            {...register("phone", { required: "This is required" })}
            type="number"
            // onChange={handleHoursQuantity}
            placeholder="Enter phone..."
          />
          {errors.phone?.message && <p>{errors.phone?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded-md px-1"
            id="email"
            {...register("email", { required: "This is required" })}
            type="email"
            // onChange={handleHoursQuantity}
            placeholder="Enter email..."
          />
          {errors.email?.message && <p>{errors.email?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="event">Celebration type</label>
          <select
            className="rounded-md px-1 capitalize"
            id="event"
            {...register("event", { required: "This is required" })}
          >
            {eventsList.map((event) => (
              <option key={event} value={event}>
                {event}
              </option>
            ))}
          </select>
          {errors.event?.message && <p>{errors.event?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="hours">Approximate services hours quantity</label>
          <input
            className="rounded-md px-1"
            id="hours"
            {...register("hours", { required: "This is required" })}
            type="number"
            // onChange={handleHoursQuantity}
            placeholder="Enter hours..."
          />
          {errors.hours?.message && <p>{errors.hours?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="location">Event location</label>
          <input
            className="rounded-md px-1"
            id="location"
            {...register("location", { required: "This is required" })}
            type="text"
            placeholder="Enter location"
          />
          {errors.location?.message && <p>{errors.location?.message}</p>}
        </div>

        <div className="flex justify-between gap-2 rounded-lg bg-stone-400 px-4 py-2">
          <label htmlFor="guests">Guests number</label>
          <input
            className="rounded-md px-1"
            id="guests"
            {...register("guests", { required: "This is required" })}
            type="number"
            placeholder="Enter guests number..."
          />
          {errors.guests?.message && <p>{errors.guests?.message}</p>}
        </div>

        <input
          className="rounded-md bg-stone-200 py-2 text-lg tracking-widest"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
}

export default PriceForm;

