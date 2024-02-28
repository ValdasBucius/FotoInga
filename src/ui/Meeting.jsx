import { useState } from "react";
import MeetingWidest from "./MeetingWidest";
import DeleteEditButtons from "./DeleteEditButtons";
import MeetingSmall from "./MeetingSmall";

function Meeting({ meeting, onEditAppointment, onSetEdit, onEdit, onCreate }) {
  const { name, date, location, start, end, price, fuel, note } = meeting;

  const [showMeeting, setShowMeeting] = useState(false);

  return (
    <li className="items-between mb-1 flex flex-col rounded-lg border border-black bg-black/50 p-2 capitalize duration-500 hover:bg-black/75">
      {showMeeting ? (
        <>
          <MeetingWidest
            setShowMeeting={setShowMeeting}
            date={date}
            start={start}
            end={end}
            name={name}
            location={location}
            price={price}
            fuel={fuel}
            note={note}
          />
          {!onCreate && (
            <DeleteEditButtons
              onEdit={onEdit}
              onSetEdit={onSetEdit}
              onEditAppointment={onEditAppointment}
              meeting={meeting}
            />
          )}
        </>
      ) : (
        <MeetingSmall
          setShowMeeting={setShowMeeting}
          date={date}
          start={start}
          end={end}
          name={name}
        />
      )}
    </li>
  );
}

export default Meeting;
