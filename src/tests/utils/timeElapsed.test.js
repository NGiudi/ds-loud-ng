import { timeElapsed } from "../../utils/time/clock";

test("timeElapsed function no received params.", () => {
  const result = timeElapsed();
  expect(result).toStrictEqual("0 s");
});

test("timeElapsed function seconds diference.", () => {
  const result = timeElapsed(0, 1000);
  expect(result).toStrictEqual("1 s");
});

test("timeElapsed function minutes diference.", () => {
  const result = timeElapsed(0, 120000);
  expect(result).toStrictEqual("2 m");
});

test("timeElapsed function hours diference.", () => {
  const result = timeElapsed(0, 10800000);
  expect(result).toStrictEqual("3 h");
});

test("timeElapsed function days diference.", () => {
  const result = timeElapsed(0, 345600000);
  expect(result).toStrictEqual("4 d");
});
