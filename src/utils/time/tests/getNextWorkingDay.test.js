import { getNextWorkingDay } from "../date";

test("get next working day.", () => {
  let result = getNextWorkingDay("9/2/2022").toDateString();
  expect(result).toStrictEqual("Mon Sep 05 2022");

  result = getNextWorkingDay("9/3/2022").toDateString();
  expect(result).toStrictEqual("Mon Sep 05 2022");

  result = getNextWorkingDay("9/4/2022").toDateString();
  expect(result).toStrictEqual("Mon Sep 05 2022");
});

test("get next working day with holiday.", () => {
  let result = getNextWorkingDay("4/13/2022").toDateString();
  expect(result).toStrictEqual("Mon Apr 18 2022");

  result = getNextWorkingDay("4/14/2022").toDateString();
  expect(result).toStrictEqual("Mon Apr 18 2022");

  result = getNextWorkingDay("4/15/2022").toDateString();
  expect(result).toStrictEqual("Mon Apr 18 2022");
});
