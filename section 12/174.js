"use strict";


const future = new Date("Oct 25 2021 14:12:15");
// const demain = new Date("Jun 26 2021 14:15:23");
// console.log(demain);
const today = new Date();

function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

console.log(getNumberOfDays(today,future));