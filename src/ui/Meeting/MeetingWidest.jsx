import { getTotalPrice } from "../../utils/helpers";
import calendarIcon from "../../data/Icons/calendar.svg";
import moneyIcon from "../../data/Icons/money.svg";
import locationIcon from "../../data/Icons/location.svg";
import DeleteEditButtons from "./DeleteEditButtons";

function MeetingWidest({
  setShowMeeting,
  date,
  start,
  end,
  name,
  location,
  price,
  fuel,
  note,
  onCreate,
  onEdit,
  onSetEdit,
  onEditAppointment,
  meeting,
}) {
  return (
    <>
      <div onClick={() => setShowMeeting(false)}>
        <div className="flex flex-col">
          <div>
            <div className="flex flex-col items-center">
              <img className="mb-1" src={calendarIcon} alt="calendar icon" />
              <h3 className="text-lg">{date}</h3>
            </div>

            <h4 className="text-xl text-green-600">{name}</h4>
            <p className="mb-3 text-sm underline">
              {start} - {end}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-start gap-2">
              <span className="">Location: </span>
              <span className="text-lg text-green-600">{location}</span>
              <img className="w-4" src={locationIcon} alt="location icon" />
            </div>

            <div className="flex items-center justify-start gap-2">
              <p>Price per hour: </p>
              <span className="text-green-600">{price}</span>
              <img className="w-4 pb-1" src={moneyIcon} alt="money bag icon" />
            </div>

            <div className="flex items-center justify-start gap-2">
              <p>Fuel costs:</p>
              <span className="text-green-600">{fuel}</span>
              <img className="w-4 pb-1" src={moneyIcon} alt="money bag icon" />
            </div>

            <p className="text-end text-green-600">
              Total: {getTotalPrice(start, end, price, fuel)} 💸
            </p>

            {note && (
              <p className="rounded-md p-1 text-end text-white">{note}</p>
            )}
          </div>
        </div>
      </div>

      {!onCreate && (
        <DeleteEditButtons
          onEdit={onEdit}
          onSetEdit={onSetEdit}
          onEditAppointment={onEditAppointment}
          meeting={meeting}
        />
      )}
    </>
  );
}

export default MeetingWidest;
