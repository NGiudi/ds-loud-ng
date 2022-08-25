import { pick } from "../objects/object";

/**
 * @param {number} obj interval time value.
 * @return {objec} object time.
 */
export const getTimeObject = (ms) => {
  if (ms < 0) ms = 0;

  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);

  return {
    days: ms ? days : 0,
    hours: ms ? hours : 0,
    minutes: ms ? minutes : 0,
    seconds: ms ? seconds : 0,
    total_ms: ms ? ms : 0,
  };
};

/**
 * @param {object} obj time object.
 * @param {string} obj format time.
 * @return {string} formatted string.
 */
export const formatClock = (timeObject, format) => {
  const fields = ["hours", "minutes", "seconds"];
  let time = {};

  /* if timeObject is not received, the time is set to zero. */
  if (timeObject) {
    time = pick(timeObject, fields);
  } else {
    time.hours = 0;
    time.minutes = 0;
    time.seconds = 0;
  }

  /* set default format. */
  if (!format) format = "hh:mm:ss";

  /* create string formatted */
  for (const property in time) {
    let numString = "";
    if (time[property] < 10) numString = "0";

    numString += time[property].toString();

    if (property === "hours") {
      format = format.replace("hh", numString);
    } else if (property === "minutes") {
      format = format.replace("mm", numString);
    } else if (property === "seconds") {
      format = format.replace("ss", numString);
    }
  }

  return format;
};
