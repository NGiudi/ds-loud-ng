import { getNextWorkingDay } from "../../utils/time/date";

test("get next working day.", () => {
  let result = getNextWorkingDay(new Date("9/2/2022")).toDateString();
  expect(result).toStrictEqual("Mon Sep 05 2022");

  result = getNextWorkingDay(new Date("9/3/2022")).toDateString();
  expect(result).toStrictEqual("Mon Sep 05 2022");

  result = getNextWorkingDay(new Date("9/4/2022")).toDateString();
  expect(result).toStrictEqual("Mon Sep 05 2022");
});

test("get next working day with holiday.", () => {
  let result = getNextWorkingDay(new Date("4/13/2022")).toDateString();
  expect(result).toStrictEqual("Mon Apr 18 2022");

  result = getNextWorkingDay(new Date("4/14/2022")).toDateString();
  expect(result).toStrictEqual("Mon Apr 18 2022");

  result = getNextWorkingDay(new Date("4/15/2022")).toDateString();
  expect(result).toStrictEqual("Mon Apr 18 2022");
});
