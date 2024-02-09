import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isPast,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { today } from "../utils/helpers";

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const colStartClasses = [
  "",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
];

function Calendar({
  selectedDay,
  setSelectedDay,
  meetingsData,
  onSetCreate,
  onEdit,
}) {
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy")); //Iš šiandienos išskaitome menesį ir metus

  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function handleNextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 }); //Kaip ir raso pavadinimas
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  function handlePreviousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  return (
    <>
      <div className="mb-4 flex items-center justify-center gap-4 border-b border-black/25">
        <button onClick={handlePreviousMonth} className="mb-1">
          <IoChevronBack />
        </button>
        <h4 className="text-[22px]">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h4>
        <button onClick={handleNextMonth} className="mb-1">
          <IoChevronForward />
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 text-xl">
        {weekDays.map((names) => (
          <span key={names}>{names}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 grid-rows-5 text-lg">
        {days.map((day, dayIndex) => (
          <button
            className={`${dayIndex === 0 ? colStartClasses[getDay(day)] : undefined} ${isToday(day) && "border"} ${isEqual(day, selectedDay) && "bg-green-s800/75"} ${!isSameMonth(day, firstDayCurrentMonth) && "text-stone-600"} m-1 flex items-center justify-center rounded-md p-1 hover:bg-stone-400/75`}
            key={day}
            onClick={() => setSelectedDay(day)}
          >
            <time key={day.toString()} dateTime={format(day, `yyyy-MM-dd`)}>
              {format(day, "d")}
              <div className="mx-auto flex w-5 justify-center">
                {meetingsData?.some((meeting) =>
                  isSameDay(parseISO(meeting.date), day),
                ) && <div className="h-1 w-5 rounded-full bg-green-800"></div>}
              </div>
            </time>
          </button>
        ))}
      </div>

      {!onEdit &&
        days.map((day) =>
          isEqual(day, selectedDay) && !isPast(selectedDay) ? (
            <button
              key={day.id}
              className="rounded-xl bg-stone-500 p-4 duration-300 hover:bg-stone-700"
              onClick={() => onSetCreate((state) => !state)}
            >
              Create Appointment at day {format(day, "MMM d")}
            </button>
          ) : null,
        )}
    </>
  );
}

export default Calendar;
