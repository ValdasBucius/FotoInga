import { motion } from "framer-motion";

import useCalendar from "./Calendar/useCalendar";
import CalendarMonthSelector from "./Calendar/CalendarMonthSelector";
import CalendarWeekDays from "./Calendar/CalendarWeekDays";
import CalendarDays from "./Calendar/CalendarDays";
import CreateButton from "./Calendar/CreateButton";

function Calendar({
  selectedDay,
  setSelectedDay,
  reservations,
  onSetCreate,
  onEdit,
  selectedDayMeetings,
}) {
  const { handleNextMonth, handlePreviousMonth, firstDayCurrentMonth, days } =
    useCalendar();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <CalendarMonthSelector
        firstDayCurrentMonth={firstDayCurrentMonth}
        handleNextMonth={handleNextMonth}
        handlePreviousMonth={handlePreviousMonth}
      />
      <CalendarWeekDays />

      <CalendarDays
        setSelectedDay={setSelectedDay}
        reservations={reservations}
        selectedDay={selectedDay}
        firstDayCurrentMonth={firstDayCurrentMonth}
        days={days}
      />

      <CreateButton
        selectedDayMeetings={selectedDayMeetings}
        onEdit={onEdit}
        onSetCreate={onSetCreate}
        selectedDay={selectedDay}
        days={days}
      />
    </motion.div>
  );
}

export default Calendar;
