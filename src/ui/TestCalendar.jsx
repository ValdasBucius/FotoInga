import {
  startOfToday, //išmeta šiandienos diena
  eachDayOfInterval, //Priima objekta su start data ir end data
  add,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfMonth,
  isPast,
} from "date-fns";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

import { useState } from "react";
import Meeting from "./Meeting";
import AppointmentForm from "./AppointmentForm";

const meetings = [
  {
    id: 1,
    date: "2024-02-08",
    name: "Lena Krupje",
    location: "Renavo dvaras",
    start: "12:30",
    end: "16:00",
    price: "90",
    fuel: "20",
    hours: 6,
    note: "Firstable go to church, later to Renavas palace",
    imageUrl:
      "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
  },
  {
    id: 3,
    date: "2024-02-15",
    name: "Lena Krupje",
    location: "Renavo dvaras",
    start: "12:30",
    end: "16:00",
    price: "90",
    fuel: "20",
    hours: 6,
    note: "Firstable go to church, later to Renavas palace",
    imageUrl:
      "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
  },
  {
    id: 5,
    date: "2024-02-12",
    name: "Lena Krupje",
    location: "Renavo dvaras",
    start: "12:30",
    end: "16:00",
    price: "90",
    fuel: "20",
    hours: 6,
    note: "Firstable go to church, later to Renavas palace",
    imageUrl:
      "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
  },
];
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

function TestCalendar() {
  const today = startOfToday();

  const [selectedDay, setSelectedDay] = useState(today);
  const [formActive, setFormActive] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy")); //Iš šiandienos išskaitome menesį ir metus
  const [meetingsData, setMeetingsData] = useState(meetings);

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

  const selectedDayMeetings = meetingsData.filter((meeting) =>
    isSameDay(parseISO(meeting.date), selectedDay),
  );

  function handleInitiateForm() {
    setFormActive((state) => !state);
  }

  function addAppointment(object) {
    setMeetingsData((prev) => [...prev, object]);
    setFormActive((state) => !state);
  }

  function deleteAppointment(id) {
    setMeetingsData((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="grid grid-cols-2">
      <div className="max-w-[400px] rounded-xl border border-black bg-black/50 p-4">
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
              className={`${dayIndex === 0 ? colStartClasses[getDay(day)] : undefined} ${isToday(day) && "border"} ${isEqual(day, selectedDay) && "bg-green-800/75"} ${!isSameMonth(day, firstDayCurrentMonth) && "text-stone-600"} m-1 flex items-center justify-center rounded-md p-1 hover:bg-stone-400/75`}
              key={day}
              onClick={() => setSelectedDay(day)}
            >
              <time key={day.toString()} dateTime={format(day, `yyyy-MM-dd`)}>
                {format(day, "d")}
                <div className="mx-auto flex w-5 justify-center">
                  {meetingsData.some((meeting) =>
                    isSameDay(parseISO(meeting.date), day),
                  ) && (
                    <div className="h-1 w-5 rounded-full bg-green-800"></div>
                  )}
                </div>
              </time>
            </button>
          ))}
        </div>

        {days.map((day) =>
          isEqual(day, selectedDay) && !isPast(selectedDay) ? (
            <button
              className="rounded-xl bg-stone-500 p-4 duration-300 hover:bg-stone-700"
              onClick={() => handleInitiateForm()}
            >
              Create Appointment at day {format(day, "MMM d")}
            </button>
          ) : null,
        )}

        {formActive && (
          <AppointmentForm
            onSelectedDay={selectedDay}
            onAddAppointment={addAppointment}
          />
        )}
      </div>

      <div className="justify-self-end">
        <ul>
          {selectedDayMeetings.length > 0 ? (
            selectedDayMeetings.map((meeting) => (
              <Meeting
                key={meeting.id}
                meeting={meeting}
                selectedDay={selectedDay}
                onDeleteAppointment={deleteAppointment}
              />
            ))
          ) : (
            <p>No meetings for today</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TestCalendar;
