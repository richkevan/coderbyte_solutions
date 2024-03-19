const FirstFactorial = require("../index.js");

test("FirstFactorial is a function", () => {
  expect(typeof FirstFactorial).toEqual("function");
});

test("FirstFactorial returns the correct value", () => {
  expect(FirstFactorial(4)).toBe(24);
});

test("FirstFactorial returns the correct value", () => {
  expect(FirstFactorial(8)).toBe(40320);
});

test("FirstFactorial returns the correct value", () => {
  expect(FirstFactorial(12)).toBe(479001600);
});

test("FirstFactorial returns the correct value", () => { 
  expect(FirstFactorial(18)).toBe(6402373705728000);
});

test("FirstFactorial returns the correct value", () => { 
  expect(FirstFactorial(20)).toBe(2432902008176640000);
});