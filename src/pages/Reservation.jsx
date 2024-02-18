import Container from "../ui/Container";
import background from "../data/Background5.jpg";

import TestCalendar from "../ui/TestCalendar";
import { useContext } from "react";
import { NavigationContext } from "../App";

function Reservation() {
  const { burgerActive } = useContext(NavigationContext);

  return (
    <div className="absolute top-0 -z-20 min-h-screen min-w-full bg-background4">
      <Container>
        <div
          className={`${!burgerActive ? "pt-[80px]" : "pt-[320px]"} text-center text-stone-200`}
        >
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
