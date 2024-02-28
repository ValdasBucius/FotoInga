import createIcon from "../../data/Icons/confirm.svg";
import editIcon from "../../data/Icons/edit.svg";
import cancelIcon from "../../data/Icons/cancel.svg";

function CreateEditButtons({
  onSetCreate,
  onSetEdit,
  onEdit,
  isCreating,
  isEditing,
}) {
  function handleCancel() {
    onSetCreate(false);
    onSetEdit(false);
  }
  return (
    <div className="flex justify-between gap-2 text-center">
      <button
        className="rounded-md border border-black bg-green-800/75 px-2 text-sm tracking-widest duration-300 hover:bg-green-800/25"
        type="submit"
        disabled={isCreating || isEditing}
      >
        {onEdit ? (
          <div className="flex items-center gap-2">
            <img className="w-5" src={editIcon} alt="Pen icon" />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <img className="w-5" src={createIcon} alt="Check icon" />
          </div>
        )}
      </button>

      <button
        className="rounded-md border border-black bg-red-800/75 px-2 py-1 text-sm tracking-widest duration-300 hover:bg-red-800/25"
        onClick={handleCancel}
        type="reset"
        disabled={isCreating || isEditing}
      >
        <div className="flex items-center gap-2">
          <img className="w-4" src={cancelIcon} alt="X icon" />
        </div>
      </button>
    </div>
  );
}

export default CreateEditButtons;
