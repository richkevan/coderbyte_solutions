const QuestionsMarks = require('../index.js');

test('QuestionsMarks is a function', () => {
  expect(typeof QuestionsMarks).toEqual('function');
});

test('QuestionsMarks returns the correct value', () => {
  expect(QuestionsMarks('9???1???9???1???9')).toEqual(true);
});

test('QuestionsMarks returns the correct value', () => {
  expect(QuestionsMarks('5??aaaaaaaaaaaaaaaaaaa?5?5')).toEqual(false);
});

test('QuestionsMarks returns the correct value', () => {
  expect(QuestionsMarks('5??5')).toEqual(false);
});

test('QuestionsMarks returns the correct value', () => {
  expect(QuestionsMarks('5??9klm')).toEqual(false);
});

test('QuestionsMarks returns the correct value', () => {
  expect(QuestionsMarks('5??9klm?5?5')).toEqual(false);
});

test('QuestionsMarks returns the correct value', () => {
  expect(QuestionsMarks('kpo2???8hhh7???3')).toEqual(true);
});

test('QuestionsMarks returns the correct value', () => {
  expect(QuestionsMarks('2???7???1')).toEqual(false);
});

test('QuestionsMarks returns the correct value', () => {
  expect(QuestionsMarks('2???7???1???9')).toEqual(true);
});

test('QuestionsMarks returns the correct value', () => {
  expect(QuestionsMarks('1???9??2???8')).toEqual(true);
});

test('QuestionsMarks returns the correct value', () => {
  expect(QuestionsMarks('1???9??2???8???9')).toEqual(true);
});

test('QuestionsMarks returns the correct value', () => {
  expect(QuestionsMarks('9??10b')).toEqual(false);
});