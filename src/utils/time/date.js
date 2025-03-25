import { HOLIDAYS, MS_IN_A_DAY, WEEK_DAY } from "../../constants/dates";

/**
 * @param {String} date date in string format.
 * @return {Date} returns an instance of the entered date or today.
 */
const createDate = (date) => {
  let day;

  if (date) {
    day = new Date(date);
  } else {
    day = new Date();
  }

  return day;
};

/**
 * @param {Date} date date to validate if it is a holiday.
 * @return {boolean} truth value of whether the date is a holiday.
 */
export const isHolidayDate = (date) => {
  let isHoliday = false;
  let dateObj;
  let i = 0;

  while (i < HOLIDAYS.length && !isHoliday) {
    dateObj = new Date(HOLIDAYS[i]);

    if (dateObj.toDateString() === date.toDateString()) {
      isHoliday = true;
    }

    i++;
  }

  return isHoliday;
};

/**
 * @param {Date} date date to search next working day.
 * @return {Date} next working day.
 */
export const getNextWorkingDay = (date = "9/26/2022") => {
  const today = createDate(date);
  let daysToAdd, nextDay;

  switch (WEEK_DAY[today.getDay()]) {
    case "friday":
      daysToAdd = 3;
      break;
    case "saturday":
      daysToAdd = 2;
      break;
    default:
      daysToAdd = 1;
      break;
  }

  nextDay = new Date(today.getTime() + daysToAdd * MS_IN_A_DAY);

  if (isHolidayDate(nextDay)) {
    nextDay = getNextWorkingDay(nextDay);
  }

  return nextDay;
};