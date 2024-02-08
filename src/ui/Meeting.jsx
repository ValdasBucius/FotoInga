import locationIcon from "../data/Icons/location.svg";
import calendarIcon from "../data/Icons/calendar.svg";
import moneyIcon from "../data/Icons/money.svg";
import clock from "../data/Icons/clock.svg";

function Meeting({
  meeting,
  onDeleteAppointment,
  onSetIsEditing,
  onEditAppointment,
}) {
  const {
    id,
    name,
    date,
    location,
    start,
    end,
    price,
    fuel,
    hours,
    note,
    imageUrl,
  } = meeting;

  function handleDeleteAppointment(id) {
    onDeleteAppointment(id);
  }

  return (
    <li className="flex max-w-[400px] flex-col items-center justify-center rounded-lg border border-black bg-black/50 p-4 capitalize">
      <div className="flex flex-col">
        <div>
          <div className="flex flex-col items-center justify-center">
            <img className="mb-1" src={calendarIcon} alt="calendar icon" />
            <h3 className="mb-1 text-lg">{date}</h3>
          </div>

          <p className="mb-1 text-sm">
            {start} - {end}
          </p>
          <p className="mb-2 text-xl text-green-600">{name}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="mt-1">{location}</p>
            <img src={locationIcon} alt="location icon" />
          </div>
          <div className="flex items-center justify-between">
            <p>{price}eu/h</p>
            <img src={moneyIcon} alt="money bag icon" />
          </div>

          <div className="flex items-center justify-between">
            <p>{fuel}eu/fuel</p>
            <img className="" src={moneyIcon} alt="money bag icon" />
          </div>
          <div className="flex items-center justify-between">
            <p>{hours}H ordered</p>
            <img className="" src={clock} alt="clock icon" />
          </div>

          <p className="rounded-md bg-stone-200 p-1 text-black">{note}</p>
        </div>
      </div>

      <button
        className="mt-2 rounded-lg border border-black bg-red-600/75 p-2"
        onClick={() => handleDeleteAppointment(id)}
      >
        Delete appointment
      </button>
    </li>
  );
}

export default Meeting;
