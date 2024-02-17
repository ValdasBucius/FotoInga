import locationIcon from "../data/Icons/location.svg";
import calendarIcon from "../data/Icons/calendar.svg";
import moneyIcon from "../data/Icons/money.svg";
import { useState } from "react";
import useDeleteReservation from "../features/reservations/useDeleteReservation";
import editIcon from "../data/Icons/edit.svg";
import deleteIcon from "../data/Icons/delete.svg";

function Meeting({ meeting, onEditAppointment, onSetEdit, onEdit, onCreate }) {
  const { id, name, date, location, start, end, price, fuel, note } = meeting;

  const [showMeeting, setShowMeeting] = useState(false);
  const { deleteReservation, isDeleting } = useDeleteReservation();

  function handleEdit(meeting) {
    onSetEdit(true);
    onEditAppointment(meeting);
  }

  const startTime = Number(start.slice(0, 2));
  const endTime = Number(end.slice(0, 2));
  const bookedTime = endTime - startTime;

  const totalPrice = bookedTime * price + fuel;

  return (
    <li className="items-between mb-1 flex flex-col rounded-lg border border-black bg-black/50 p-2 capitalize duration-500 hover:bg-black/75">
      {showMeeting ? (
        <>
          <button onClick={() => setShowMeeting(false)}>
            <div className="flex flex-col ">
              <div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="mb-1"
                    src={calendarIcon}
                    alt="calendar icon"
                  />
                  <h3 className=" text-lg">{date}</h3>
                </div>

                <h4 className="text-xl text-green-600">{name}</h4>
                <p className="mb-3 text-sm underline">
                  {start} - {end}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="">Location: </span>
                  <span className="text-lg text-green-600">{location}</span>
                  <img className="w-4" src={locationIcon} alt="location icon" />
                </div>

                <div className="flex items-center justify-center gap-2">
                  <p>Price per hour: </p>
                  <span className="text-green-600">{price}</span>
                  <img
                    className="w-4 pb-1"
                    src={moneyIcon}
                    alt="money bag icon"
                  />
                </div>

                <div className="flex items-center justify-center gap-2">
                  <p>Fuel costs:</p>
                  <span className="text-green-600">{fuel}</span>
                  <img
                    className="w-4 pb-1"
                    src={moneyIcon}
                    alt="money bag icon"
                  />
                </div>

                <p className="text-center text-green-600">
                  Total: {totalPrice} 💸
                </p>

                {note && <p className="rounded-md p-1 text-white">{note}</p>}
              </div>
            </div>
          </button>

          {!onCreate && (
            <div className="flex justify-between">
              <button
                className={`mt-2 rounded-lg border border-black text-sm ${onEdit ? "bg-stone-400/25 text-stone-200" : "bg-green-800/75 hover:bg-green-800/25"} p-2`}
                disabled={onEdit}
                onClick={() => handleEdit(meeting)}
              >
                <div>
                  <img
                    className="w-5"
                    src={editIcon}
                    alt="edit appointment icon"
                  />
                </div>
              </button>
              <button
                className={`mt-2 rounded-lg border border-black text-sm ${onEdit ? "bg-stone-400/25 text-stone-200" : "bg-red-800/75 hover:bg-red-800/25"} p-2`}
                disabled={onEdit || isDeleting}
                onClick={() => deleteReservation(id)}
              >
                <div>
                  <img className="w-5" src={deleteIcon} alt="Rubish bin icon" />
                </div>
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
