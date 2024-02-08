import {
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  startOfToday,
} from "date-fns";

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const monthDays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function Month({ data }) {
  const today = startOfToday();

  const newDays = eachDayOfInterval({
    start: startOfMonth(today),
    end: endOfMonth(today),
  });

  return (
    <div>
      <h4 className="mb-1">{data.month}</h4>
      <div className="mb-1 grid grid-cols-7">
        {weekDays.map((names) => (
          <span key={names}>{names}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 grid-rows-6">
        {monthDays.map((days) => (
          <span key={days}>{days}</span>
        ))}
      </div>
    </div>
  );
}

export default Month;
