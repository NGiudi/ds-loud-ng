import { pick } from "../object";

test("pick function no received parans.", () => {
  const result = pick();
  expect(result).toStrictEqual({});
});

test("pick function received null params", () => {
  const result = pick(null, null);
  expect(result).toStrictEqual({});
});

test("pick function received null object", () => {
  const result = pick(null, ["color", "year", "model"]);
  expect(result).toStrictEqual({});
});

test("pick function received null array fields", () => {
  const obj = {
    model: "Camaro",
    year: 1969,
    color: "yellow",
  };

  const result = pick(obj, null);
  expect(result).toStrictEqual({});
});

test("pick function received correct params but the propeties do not match.", () => {
  const obj = {
    model: "Camaro",
    year: 1969,
    color: "yellow",
  };

  const result = pick(obj, ["patent", "doors"]);
  expect(result).toStrictEqual({});
});

test("pick function received correct params.", () => {
  const obj = {
    model: "Camaro",
    year: 1969,
    color: "yellow",
  };

  const result = pick(obj, ["model", "year"]);
  expect(result).toStrictEqual({
    model: "Camaro",
    year: 1969,
  });
});
