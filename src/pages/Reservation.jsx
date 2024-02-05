import Container from "../ui/Container";
function Reservation() {
  const date = new Date();

  const curYear = date.getFullYear();
  const curDay = date.getDate();
  // const curMonth = date.getMonth() + 1;
  const currHour = date.getHours();
  const currMinutes = date.getMinutes();
  const dayOfWeek = date.getDay();

  const allYearMonthsDays = [
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ],
  ];

  // console.log(curYear);
  // console.log(curDay);
  // console.log(curMonth);
  // console.log(currHour);
  // console.log(currMinutes);
  // console.log(dayOfWeek); //tipo pirma saviatės diena bus 1

  //experimentas
  function getDaysInCurrentMonth() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
  const result = getDaysInCurrentMonth();
  console.log(result); // 👉️ 31

  const allMonths = 12;
  const colors = [
    "bg-stone-200",
    "bg-stone-400",
    "bg-stone-600",
    "bg-stone-800",
    "bg-blue-200",
    "bg-blue-400",
    "bg-blue-600",
    "bg-blue-800",
    "bg-pink-200",
    "bg-pink-400",
    "bg-pink-600",
    "bg-pink-800",
  ];

  return (
    <Container>
      <div className="my-24 grid h-screen grid-cols-4 grid-rows-3 gap-2">
        {Array.from({ length: allMonths }, (_, i) => (
          <div
            key={i}
            className={`${colors[i % colors.length]} grid grid-cols-5 grid-rows-6 items-center gap-1 p-1`}
          >
            {allYearMonthsDays.map((day, i) => (
              <span
                className="rounded-md bg-green-200 py-1 text-center"
                key={i}
              >
                {day}
              </span>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Reservation;
