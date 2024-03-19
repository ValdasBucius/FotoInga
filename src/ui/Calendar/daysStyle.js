import { getDay, isEqual, isPast, isToday, subDays } from "date-fns";

const colStartClasses = [
  "",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
];

export const baseStyle =
  "m-[0.5px] flex items-center justify-center rounded-md p-1 hover:bg-stone-400/50";

export const daysOrder = (dayIndex, day) =>
  dayIndex === 0 ? colStartClasses[getDay(day)] : undefined;

export const currentDay = (day) => isToday(day) && "bg-green-800/75";

export const currSelectedDay = (day, selectedDay) =>
  isEqual(day, selectedDay) && "bg-green-200/25";

export const daysInPast = (day) =>
  isPast(subDays(day, -1)) && "text-stone-600/75";
