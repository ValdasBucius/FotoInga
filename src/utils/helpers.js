import { format, getHours, startOfToday } from "date-fns";

export const today = startOfToday();

export function timeIntervals() {
  let quarterHours = ["00", "15", "30", "45"];
  let times = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 4; j++) {
      let time = i + ":" + quarterHours[j];
      if (i < 10) {
        time = "0" + time;
      }
      times.push(time);
    }
  }
  return times;
}

export function priceIntervals() {
  let prices = [];
  for (let i = 0; i <= 200; i += 5) {
    prices.push(i);
  }
  return prices;
}

export function getTotalPrice(start, end, price, fuel) {
  const startTime = Number(start.slice(0, 2));
  const endTime = Number(end.slice(0, 2));

  const startQuarters = (Number(start.slice(3, 5)) * 100) / 6000; //paversti ketvirtadaliais
  const endQuarters = (Number(end.slice(3, 5)) * 100) / 6000;

  const bookedTime = endTime + endQuarters - (startTime + startQuarters);

  const totalPrice = bookedTime * price + fuel;
  return totalPrice;
}
