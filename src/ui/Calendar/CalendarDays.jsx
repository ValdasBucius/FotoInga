import {
  format,
  getDay,
  isEqual,
  isPast,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
  subDays,
} from "date-fns";
import useCalendar from "./useCalendar";

const colStartClasses = [
  "",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
];

function CalendarDays({
  setSelectedDay,
  reservations,
  selectedDay,
  firstDayCurrentMonth,
  days,
}) {
  return (
    <div className="mb-2 grid grid-cols-7 grid-rows-5 text-lg">
      {days.map((day, dayIndex) => (
        <button
          className={`${dayIndex === 0 ? colStartClasses[getDay(day)] : undefined} ${isToday(day) && "bg-green-800/75"} ${isEqual(day, selectedDay) && "bg-green-200/25"} ${!isSameMonth(day, firstDayCurrentMonth) && "text-stone-600"} m-[0.5px] flex items-center justify-center rounded-md p-1 hover:bg-stone-400/50 ${isPast(subDays(day, -1)) && "text-stone-600/75"}`}
          key={day}
          onClick={() => setSelectedDay(day)}
        >
          <time key={day.toString()} dateTime={format(day, `yyyy-MM-dd`)}>
            {format(day, "d")}
            <div className="mx-auto flex w-5 justify-center">
              {reservations?.some((meeting) =>
                isSameDay(parseISO(meeting.date), day),
              ) && (
                <div
                  className={`h-1 w-5 rounded-full bg-red-800/75 ${isPast(subDays(day, -1)) && `bg-stone-800`}`}
                ></div>
              )}
            </div>
          </time>
        </button>
      ))}
    </div>
  );
}

export default CalendarDays;