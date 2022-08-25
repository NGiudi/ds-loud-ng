import { getTimeObject } from "../time";

const neutral = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  total_ms: 0,
};

test("getTimeObject function no received paran.", () => {
  const result = getTimeObject();
  expect(result).toStrictEqual(neutral);
});

test("getTimeObject function received null param.", () => {
  const result = getTimeObject(null);
  expect(result).toStrictEqual(neutral);
});

test("getTimeObject function received an old date.", () => {
  const result = getTimeObject(-25000);
  expect(result).toStrictEqual(neutral);
});

test("getTimeObject function received an date.", () => {
  const result = getTimeObject(10000);
  expect(result).toStrictEqual({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 10,
    total_ms: 10000,
  });
});

test("getTimeObject function received an date.", () => {
  const result = getTimeObject(5000000);
  expect(result).toStrictEqual({
    days: 0,
    hours: 1,
    minutes: 23,
    seconds: 20,
    total_ms: 5000000,
  });
});
