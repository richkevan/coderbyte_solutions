const FindIntersection = require("../index.js");

test("FindIntersection function exists", () => {
  expect(FindIntersection).toBeDefined();
});

test('FindIntersection function, ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]', () => {
  expect(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])).toEqual(["1","4","13"]);
});

test('FindIntersection function, ["2, 5, 7", "1, 3, 8"]', () => {
  expect(FindIntersection(["2, 5, 7", "1, 3, 8"])).toEqual(false);
});

test('FindIntersection function, ["1, 2, 3", "1, 2, 3"]', () => {
  expect(FindIntersection(["1, 2, 3", "1, 2, 3"])).toEqual(["1","2","3"]);
});

test('FindIntersection function, ["", "1, 2, 3, 4, 5"]', () => {
  expect(FindIntersection(["", "1, 2, 3, 4, 5"])).toEqual(false);
});

test('FindIntersection function, ["1000, 3000, 5000", "3000, 4000, 5000, 6000"]', () => {
  expect(FindIntersection(["1000, 3000, 5000", "3000, 4000, 5000, 6000"])).toEqual(["3000","5000"]);
});

test('FindIntersection function, ["5, 6, 7, 8", "7, 8, 9, 10"]', () => {
  expect(FindIntersection(["5, 6, 7, 8", "7, 8, 9, 10"])).toEqual(["7","8"]);
});

test('FindIntersection function, ["-5, -3, -1, 2, 4", "-4, -3, -1, 2, 6"]', () => {
  expect(FindIntersection(["-5, -3, -1, 2, 4", "-4, -3, -1, 2, 6"])).toEqual(["-3","-1","2"]);
});

test('FindIntersection function, ["1, 2, 2, 3, 4", "2, 2, 4, 4, 5, 6"]', () => {
  expect(FindIntersection(["1, 2, 2, 3, 4", "2, 2, 4, 4, 5, 6"])).toEqual(["2","4"]);
});

test('FindIntersection function, ["1, 2, 3, 4, 5", "5, 6, 7, 8, 9"]', () => {
  expect(FindIntersection(["1, 2, 3, 4, 5", "5, 6, 7, 8, 9"])).toEqual(["5"]);
});