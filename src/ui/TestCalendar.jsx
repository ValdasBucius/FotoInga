import { isSameDay, parseISO } from "date-fns";

import { useState } from "react";
import Meeting from "./Meeting";
import AppointmentForm from "./AppointmentForm";
import { today } from "../utils/helpers";
import Calendar from "./Calendar";
import Loader from "./Loader";
import useReservations from "../features/reservations/useReservations";

function TestCalendar() {
  const { isLoading, reservations } = useReservations();

  const [selectedDay, setSelectedDay] = useState(today);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [reservationToEdit, setReservationToEdit] = useState();
  const [showMeetings, setShowMeetings] = useState(false);

  if (isLoading) return <Loader />;

  const selectedDayMeetings = reservations?.filter((meeting) =>
    isSameDay(parseISO(meeting.date), selectedDay),
  );

  function editAppointment(id) {
    setReservationToEdit(id);
  }

  return (
    <div className="flex flex-col gap-2 pb-8">
      <div className="rounded-xl border border-black bg-black/50 p-4 lg:col-span-2">
        {create || edit ? (
          <AppointmentForm
            onSelectedDay={selectedDay}
            onReservationToEdit={reservationToEdit}
            onCreate={create}
            onSetCreate={setCreate}
            onEdit={edit}
            onSetEdit={setEdit}
            onSetDateToEdit={setReservationToEdit}
          />
        ) : (
          <Calendar
            selectedDayMeetings={selectedDayMeetings}
            setSelectedDay={setSelectedDay}
            selectedDay={selectedDay}
            reservations={reservations}
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
                onEditAppointment={editAppointment}
                onSetEdit={setEdit}
                onEdit={edit}
                onCreate={create}
              />
            ))
          ) : (
            <p>No meetings for today...</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TestCalendar;
