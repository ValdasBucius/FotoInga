import Container from "../ui/Container";
import background from "../data/Background5.jpg";

import TestCalendar from "../ui/TestCalendar";
function Reservation() {
  return (
    <div className="absolute top-0 -z-20 min-h-screen min-w-full bg-background4">
      <Container>
        <div className="pt-[80px] text-center text-stone-200">
          <h2 className="mb-2 text-left text-[30px] uppercase tracking-widest">
            Reservations
          </h2>
          <TestCalendar />
        </div>
      </Container>
    </div>
  );
}

export default Reservation;
