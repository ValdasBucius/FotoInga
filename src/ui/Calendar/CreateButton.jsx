import { format, isEqual, isPast, subDays } from "date-fns";
import createIcon from "../../data/Icons/create.svg";
import noMore from "../../data/Icons/noMore.svg";

function CreateButton({
  selectedDayMeetings,
  onEdit,
  days,
  selectedDay,
  onSetCreate,
}) {
  const reachedLimit = selectedDayMeetings.length >= 3;

  return (
    !onEdit &&
    days.map((day) =>
      isEqual(day, selectedDay) && !isPast(subDays(selectedDay, -1)) ? (
        <button
          key={day.id}
          className={`${reachedLimit && "bg-transparent text-stone-400/50 hover:bg-transparent"} rounded-xl bg-green-800/75 p-2 text-sm text-stone-200 duration-300 hover:bg-green-800/25`}
          onClick={() => onSetCreate((state) => !state)}
          disabled={reachedLimit}
        >
          {reachedLimit ? (
            <div className="flex flex-col items-center gap-2">
              <img
                className="w-8"
                src={noMore}
                alt="Can't create appointment icon"
              />
              <span>Limt is reached</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <img
                className="w-8"
                src={createIcon}
                alt="create appointment icon"
              />
              <span>Create on {format(day, "MMM d")}</span>
            </div>
          )}
        </button>
      ) : null,
    )
  );
}

export default CreateButton;
