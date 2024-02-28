import { format } from "date-fns";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function CalendarMonthSelector({
  firstDayCurrentMonth,
  handleNextMonth,
  handlePreviousMonth,
}) {
  return (
    <div className="mb-2 flex items-center justify-center gap-4 border-b border-black/25">
      <button onClick={handlePreviousMonth} className="mb-1">
        <IoChevronBack />
      </button>
      <h4 className="text-lg">{format(firstDayCurrentMonth, "MMMM yyyy")}</h4>
      <button onClick={handleNextMonth} className="mb-1">
        <IoChevronForward />
      </button>
    </div>
  );
}

export default CalendarMonthSelector;
