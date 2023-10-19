import { omit } from "../../utils/objects/object";

test("omit function no received parans.", () => {
  const result = omit();
  expect(result).toStrictEqual({});
});

test("omit function received null params", () => {
  const result = omit(null, null);
  expect(result).toStrictEqual({});
});

test("omit function received null object", () => {
  const result = omit(null, ["color", "year", "model"]);
  expect(result).toStrictEqual({});
});

test("omit function received null array fields", () => {
  const obj = {
    model: "Camaro",
    year: 1969,
    color: "yellow",
  };

  const result = omit(obj, null);
  expect(result).toStrictEqual(obj);
});

test("omit function received correct params but the propeties do not match.", () => {
  const obj = {
    model: "Camaro",
    year: 1969,
    color: "yellow",
  };

  const result = omit(obj, ["patent", "doors"]);
  expect(result).toStrictEqual(obj);
});

test("omit function received correct params.", () => {
  const obj = {
    model: "Camaro",
    year: 1969,
    color: "yellow",
  };

  const result = omit(obj, ["model", "year"]);
  expect(result).toStrictEqual({
    color: "yellow",
  });
});
