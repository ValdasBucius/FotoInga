import { format, isPast, isSameDay, parseISO, subDays } from "date-fns";
import {
  baseStyle,
  currSelectedDay,
  currentDay,
  daysInPast,
  daysOrder,
} from "./daysStyle";

function CalendarDays({ setSelectedDay, reservations, selectedDay, days }) {
  return (
    <div className="mb-2 grid grid-cols-7 grid-rows-5 text-lg">
      {days.map((day, dayIndex) => (
        <button
          className={`
          ${baseStyle} 
          ${daysOrder(dayIndex, day)} 
          ${currentDay(day)} 
          ${currSelectedDay(day, selectedDay)} 
          ${daysInPast(day)}
          `}
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
