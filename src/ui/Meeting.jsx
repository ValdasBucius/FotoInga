import locationIcon from "../data/Icons/location.svg";
import calendarIcon from "../data/Icons/calendar.svg";
import moneyIcon from "../data/Icons/money.svg";
import clock from "../data/Icons/clock.svg";
import { useState } from "react";
import useDeleteReservation from "../features/reservations/useDeleteReservation";

function Meeting({ meeting, onEditAppointment, onSetEdit, onEdit, onCreate }) {
  const { id, name, date, location, start, end, price, fuel, hours, note } =
    meeting;

  const [showMeeting, setShowMeeting] = useState(false);
  const { deleteReservation, isDeleting } = useDeleteReservation();

  function handleEdit(meeting) {
    onSetEdit(true);
    onEditAppointment(meeting);
  }

  return (
    <li className="mb-1 flex flex-col items-center justify-center rounded-lg border border-black bg-black/50 p-4 capitalize duration-500 hover:bg-black/75">
      {showMeeting ? (
        <>
          <div className="flex flex-col ">
            <button onClick={() => setShowMeeting(false)}>
              <div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="mb-1"
                    src={calendarIcon}
                    alt="calendar icon"
                  />
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
            </button>
          </div>

          {!onCreate && (
            <div>
              <button
                className={`mt-2 rounded-lg border border-black ${onEdit ? "bg-stone-400/25 text-stone-400" : "/ 75 bg-red-600"} p-2`}
                disabled={onEdit || isDeleting}
                onClick={() => deleteReservation(id)}
              >
                Delete appointment
              </button>
              <button
                className={`mt-2 rounded-lg border border-black ${onEdit ? "bg-stone-400/25 text-stone-400" : "/ 75 bg-red-600"} p-2`}
                disabled={onEdit}
                onClick={() => handleEdit(meeting)}
              >
                Edit appointment
              </button>
            </div>
          )}
        </>
      ) : (
        <button
          className="flex flex-col items-center gap-1"
          onClick={() => setShowMeeting(true)}
        >
          <div>
            <img src={calendarIcon} alt="calendar icon" />
          </div>

          <p className="text-lg">{date}</p>
          <p className="text-sm">
            {start} - {end}
          </p>
          <p className="text-xl text-green-600">{name}</p>
        </button>
      )}
    </li>
  );
}

export default Meeting;
