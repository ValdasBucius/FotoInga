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
  for (let i = 10; i <= 200; i += 5) {
    prices.push(i);
  }
  return prices;
}
