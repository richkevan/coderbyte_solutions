const LongestWord = require("../index.js");


test('LongestWord is a function', () => {
  expect(typeof LongestWord).toEqual('function');
});

test('LongestWord returns the longest word in a sentence', () => {
  expect(LongestWord("fun&!! time")).toEqual('time');
});

test('LongestWord returns the longest word in a sentence', () => {
  expect(LongestWord("I love dogs")).toEqual('love');
});

test('LongestWord returns the longest word in a sentence', () => {
  expect(LongestWord("I love dogs")).toEqual('love');
});