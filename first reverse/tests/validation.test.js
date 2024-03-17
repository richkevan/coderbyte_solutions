const FirstReverse = require('../index.js');

test("FirstReverse is a function", () => {
  expect(typeof FirstReverse).toEqual("function");
});

test("FirstReverse returns a string", () => {
  expect(typeof FirstReverse("hello")).toEqual("string");
});

test("FirstReverse returns the reversed string", () => {
  expect(FirstReverse("hello")).toEqual("olleh");
});

test("FirstReverse returns the reversed string", () => {  
  expect(FirstReverse("world")).toEqual("dlrow");
});

test("FirstReverse returns the reversed string", () => {
  expect(FirstReverse("I am a string")).toEqual("gnirts a ma I");
});