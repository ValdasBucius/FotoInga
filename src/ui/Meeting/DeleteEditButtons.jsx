import useDeleteReservation from "../../features/reservations/useDeleteReservation";
import deleteIcon from "../../data/Icons/delete.svg";
import editIcon from "../../data/Icons/edit.svg";

function DeleteEditButtons({ onEdit, meeting, onSetEdit, onEditAppointment }) {
  const { deleteReservation, isDeleting } = useDeleteReservation();

  function handleEdit(meeting) {
    onSetEdit(true);
    onEditAppointment(meeting);
    window.scrollTo(0, 0);
  }

  return (
    <div className="flex justify-between">
      <button
        className={`mt-2 rounded-lg border border-black text-sm ${onEdit ? "bg-stone-400/25 text-stone-200" : "bg-green-800/75 hover:bg-green-800/25"} p-2`}
        disabled={onEdit}
        onClick={() => handleEdit(meeting)}
      >
        <div>
          <img className="w-5" src={editIcon} alt="edit appointment icon" />
        </div>
      </button>
      <button
        className={`mt-2 rounded-lg border border-black text-sm ${onEdit ? "bg-stone-400/25 text-stone-200" : "bg-red-800/75 hover:bg-red-800/25"} p-2`}
        disabled={onEdit || isDeleting}
        onClick={() => deleteReservation(meeting.id)}
      >
        <div>
          <img className="w-5" src={deleteIcon} alt="Rubish bin icon" />
        </div>
      </button>
    </div>
  );
}

export default DeleteEditButtons;
