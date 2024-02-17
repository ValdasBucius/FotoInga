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
  subDays,
} from "date-fns";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { today } from "../utils/helpers";
import createIcon from "../data/Icons/create.svg";
import noMore from "../data/Icons/noMore.svg";
import { motion } from "framer-motion";

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
  reservations,
  onSetCreate,
  onEdit,
  selectedDayMeetings,
}) {
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy")); //Iš šiandienos išskaitome menesį ir metus

  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const reachedLimit = selectedDayMeetings.length >= 3;
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
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="mb-2 flex items-center justify-center gap-4 border-b border-black/25">
        <button onClick={handlePreviousMonth} className="mb-1">
          <IoChevronBack />
        </button>
        <h4 className="text-lg">{format(firstDayCurrentMonth, "MMMM yyyy")}</h4>
        <button onClick={handleNextMonth} className="mb-1">
          <IoChevronForward />
        </button>
      </div>

      <div className="grid grid-cols-7 text-lg">
        {weekDays.map((names) => (
          <span key={names}>{names}</span>
        ))}
      </div>

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

      {!onEdit &&
        days.map((day) =>
          isEqual(day, selectedDay) && !isPast(subDays(selectedDay, -1)) ? (
            <button
              key={day.id}
              className={`${reachedLimit && "bg-transparent text-stone-400/50 hover:bg-transparent"} rounded-xl bg-green-800/75 p-2 text-sm text-stone-200 duration-300 hover:bg-green-800/25`}
              onClick={() => onSetCreate((state) => !state)}
              disabled={reachedLimit}
            >
              {reachedLimit ? (
                <div className="flex flex-col items-center gap-2">
                  <img
                    className="w-8"
                    src={noMore}
                    alt="Can't create appointment icon"
                  />
                  <span>Limt is reached</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <img
                    className="w-8"
                    src={createIcon}
                    alt="create appointment icon"
                  />
                  <span>Create on {format(day, "MMM d")}</span>
                </div>
              )}
            </button>
          ) : null,
        )}
    </motion.div>
  );
}

export default Calendar;
