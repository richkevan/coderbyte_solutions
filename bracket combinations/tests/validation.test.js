const BracketCombinations = require('../index.js');

test('BracketCombinations is a function', () => {
  expect(typeof BracketCombinations).toEqual('function');
});

test('BracketCombinations returns the correct value', () => {
  expect(BracketCombinations(3)).toEqual(5);
});

test('BracketCombinations returns the correct value', () => {
  expect(BracketCombinations(2)).toEqual(2);
});

test('BracketCombinations returns the correct value', () => {
  expect(BracketCombinations(4)).toEqual(14);
});

test('BracketCombinations returns the correct value', () => {
  expect(BracketCombinations(6)).toEqual(132);
});

test('BracketCombinations returns the correct value', () => {
  expect(BracketCombinations(7)).toEqual(429);
});

test('BracketCombinations returns the correct value', () => {
  expect(BracketCombinations(8)).toEqual(1430);
});

test('BracketCombinations returns the correct value', () => {
  expect(BracketCombinations(9)).toEqual(4862);
});

test('BracketCombinations returns the correct value', () => {
  expect(BracketCombinations(10)).toEqual(16796);
});

test('BracketCombinations returns the correct value', () => {
  expect(BracketCombinations(13)).toEqual(742900);
});
