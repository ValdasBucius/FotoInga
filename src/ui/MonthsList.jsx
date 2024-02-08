import {
  eachDayOfInterval,
  endOfMonth,
  format,
  startOfMonth,
  startOfToday,
} from "date-fns";
import Month from "./Month";

// function getDaysInMonth(year, month) {
//   return new Date(year, month, 0).getDate();
// }

// const date = new Date();
// const currentYear = date.getFullYear();
// const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based

// // 👇️ Current Month
// const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
// console.log(daysInCurrentMonth); // 👉️ 31

// // 👇️ Other Months
// const daysInJanuary = getDaysInMonth(2025, 1);
// console.log(daysInJanuary); // 👉️ 31

// const daysInSeptember = getDaysInMonth(2025, 9);
// console.log(daysInSeptember); // 👉️ 30

const monthsName = [
  {
    month: "January",
  },
  {
    month: "February",
  },
  {
    month: "March",
  },
  {
    month: "April",
  },
  {
    month: "May",
  },
  {
    month: "June",
  },
  {
    month: "July",
  },
  {
    month: "August",
  },
  {
    month: "September",
  },
  {
    month: "October",
  },
  {
    month: "November",
  },
  {
    month: "December",
  },
];

function MonthsList() {
  const today = startOfToday();

  return (
    <>
      <h3>{format(today, "MMM yyyy")}</h3>
      <div className="grid grid-cols-4 grid-rows-3 gap-6">
        {monthsName.map((data, i) => (
          <Month data={data} key={i} />
        ))}
      </div>
    </>
  );
}

export default MonthsList;
