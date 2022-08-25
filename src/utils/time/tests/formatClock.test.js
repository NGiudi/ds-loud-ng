import { formatClock } from "../time";

const objTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 10,
  total_ms: 10000,
};

test("formatClock function no received params.", () => {
  const result = formatClock();
  expect(result).toStrictEqual("00:00:00");
});

test("formatClock function received null object and format string hh:mm:ss.", () => {
  const result = formatClock(null, "hh:mm:ss");
  expect(result).toStrictEqual("00:00:00");
});

test("formatClock function received null object and format string mm:ss.", () => {
  const result = formatClock(null, "mm:ss");
  expect(result).toStrictEqual("00:00");
});

test("formatClock function received null object and format string ss.", () => {
  const result = formatClock(null, "ss");
  expect(result).toStrictEqual("00");
});

test("formatClock function received null format string.", () => {
  const result = formatClock(objTime, null);
  expect(result).toStrictEqual("00:00:10");
});

test("formatClock function no received format string.", () => {
  const result = formatClock(objTime);
  expect(result).toStrictEqual("00:00:10");
});

test("formatClock function received format string hh:mm:ss.", () => {
  const result = formatClock(objTime, "hh:mm:ss");
  expect(result).toStrictEqual("00:00:10");
});

test("formatClock function received format string mm-ss.", () => {
  const result = formatClock(objTime, "mm-ss");
  expect(result).toStrictEqual("00-10");
});

test("formatClock function received format string ss.", () => {
  const result = formatClock(objTime, "ss");
  expect(result).toStrictEqual("10");
});

test("formatClock function received format string hh-mm-ss.", () => {
  const result = formatClock(objTime, "hh-mm-ss");
  expect(result).toStrictEqual("00-00-10");
});
