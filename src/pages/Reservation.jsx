import Container from "../ui/Container";

import TestCalendar from "../ui/TestCalendar";
function Reservation() {
  return (
    <div className="bg-background5 h-screen w-full bg-cover bg-center bg-no-repeat pt-[120px] text-center text-stone-200">
      <Container>
        <h2 className="text-left text-[48px] uppercase tracking-widest">
          Reservation
        </h2>

        <TestCalendar />
      </Container>
    </div>
  );
}

export default Reservation;
