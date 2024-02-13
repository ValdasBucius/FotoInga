import Container from "../ui/Container";
import background from "../data/Background5.jpg";

import TestCalendar from "../ui/TestCalendar";
function Reservation() {
  return (
    <div className="bg-background3 bg-cover bg-no-repeat pt-[120px] text-center text-stone-200">
      <Container>
        <TestCalendar />
      </Container>
    </div>
  );
}

export default Reservation;
