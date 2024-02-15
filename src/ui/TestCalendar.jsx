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

  if (isLoading) return <Loader />;

  const selectedDayMeetings = reservations?.filter((meeting) =>
    isSameDay(parseISO(meeting.date), selectedDay),
  );

  function editAppointment(id) {
    setReservationToEdit(id);
  }

  return (
    <div className="pb-8 lg:grid lg:grid-cols-3 lg:gap-6">
      <div className="col-span-2 rounded-xl border border-black bg-black/50 p-4">
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
            <p className="bg-black/25">No meetings for today</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default TestCalendar;
