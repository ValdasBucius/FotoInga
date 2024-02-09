import Container from "../ui/Container";

import TestCalendar from "../ui/TestCalendar";
function Reservation() {
  return (
    <div className="h-screen w-full bg-background5 bg-cover bg-center bg-no-repeat pt-[120px] text-center text-stone-200">
      <Container>
        <TestCalendar />
      </Container>
    </div>
  );
}

export default Reservation;
