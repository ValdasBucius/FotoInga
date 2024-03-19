import { motion } from "framer-motion";

import useCalendar from "./useCalendar";
import CalendarMonthSelector from "./CalendarMonthSelector";
import CalendarWeekDays from "./CalendarWeekDays";
import CalendarDays from "./CalendarDays";
import CreateButton from "./CreateButton";
import { useUser } from "../../authentification/useUser";

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

  const { isLoading, isAuthenticated, user } = useUser();
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

      {isAuthenticated && (
        <CreateButton
          selectedDayMeetings={selectedDayMeetings}
          onEdit={onEdit}
          onSetCreate={onSetCreate}
          selectedDay={selectedDay}
          days={days}
        />
      )}
    </motion.div>
  );
}

export default Calendar;
