import { add, eachDayOfInterval, endOfMonth, format, parse } from "date-fns";
import { useState } from "react";
import { today } from "../../utils/helpers";

function useCalendar() {
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
  return {
    handleNextMonth,
    handlePreviousMonth,
    firstDayCurrentMonth,
    days,
  };
}

export default useCalendar;
