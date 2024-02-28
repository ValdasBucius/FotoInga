import calendarIcon from "../data/Icons/calendar.svg";

function MeetingSmall({ setShowMeeting, date, start, end, name }) {
  return (
    <button
      className="flex flex-col items-center"
      onClick={() => setShowMeeting(true)}
    >
      <div>
        <img src={calendarIcon} alt="calendar icon" />
      </div>

      <h3 className="mt-1 text-lg">{date}</h3>
      <h4 className="text-xl text-green-600">{name}</h4>
      <p className="text-sm">
        {start} - {end}
      </p>
    </button>
  );
}

export default MeetingSmall;
