function CalendarWeekDays() {
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <div className="grid grid-cols-7 text-lg">
      {weekDays.map((names) => (
        <span key={names}>{names}</span>
      ))}
    </div>
  );
}

export default CalendarWeekDays;
