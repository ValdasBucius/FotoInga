import { isSameDay, parseISO } from "date-fns";

import { useState } from "react";
import Meeting from "./Meeting";
import AppointmentForm from "./AppointmentForm";
import { today } from "../utils/helpers";
import Calendar from "./Calendar";
import { toast } from "react-toastify";

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
    date: "2024-02-10",
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
    id: 2,
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

function TestCalendar() {
  const [selectedDay, setSelectedDay] = useState(today);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [meetingsData, setMeetingsData] = useState(meetings);
  const [dateToEdit, setDateToEdit] = useState();
  const selectedDayMeetings = meetingsData.filter((meeting) =>
    isSameDay(parseISO(meeting.date), selectedDay),
  );

  function addAppointment(object) {
    setMeetingsData((prev) => [...prev, object]);
    setCreate((state) => !state);
  }
  function deleteAppointment(id) {
    setMeetingsData((prev) => prev.filter((item) => item.id !== id));
    toast("Successfully Deleted", {
      theme: "dark",
      autoClose: 2000,
    });
  }

  function editAppointment(id) {
    setDateToEdit(meetingsData.filter((item) => item.id === id));
  }
  function finalEditFunction(object) {
    setMeetingsData((state) => [
      ...state.filter((item) => item.id !== object.id),
      object,
    ]);
  }
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 rounded-xl border border-black bg-black/50 p-4">
        {create || edit ? (
          <AppointmentForm
            onSelectedDay={selectedDay}
            onAddAppointment={addAppointment}
            onDateToEdit={dateToEdit}
            onCreate={create}
            onSetCreate={setCreate}
            onEdit={edit}
            onSetEdit={setEdit}
            onFinalEditFunction={finalEditFunction}
            onSetDateToEdit={setDateToEdit}
          />
        ) : (
          <Calendar
            setSelectedDay={setSelectedDay}
            selectedDay={selectedDay}
            meetingsData={meetingsData}
            onSetCreate={setCreate}
            onEdit={edit}
          />
        )}
      </div>

      <div>
        <ul>
          {selectedDayMeetings.length > 0 ? (
            selectedDayMeetings.map((meeting) => (
              <Meeting
                key={meeting.id}
                meeting={meeting}
                onDeleteAppointment={deleteAppointment}
                onEditAppointment={editAppointment}
                onSetEdit={setEdit}
                onEdit={edit}
                onCreate={create}
              />
            ))
          ) : (
            <p className="bg-black/25">No meetings for today</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TestCalendar;
