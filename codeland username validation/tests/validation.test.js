const CodelandUsernameValidation = require('../index.js');

test('CodelandUsernameValidation, u__hello', () => {
  expect(CodelandUsernameValidation('u__hello')).toBe(true);
});

test('CodelandUsernameValidation, User1234', () => {
  expect(CodelandUsernameValidation('User1234')).toBe(true);
});

test('CodelandUsernameValidation, 1234User', () => {
  expect(CodelandUsernameValidation('1234User')).toBe(false);
});

test('CodelandUsernameValidation, AlphaBeta22', () => {
  expect(CodelandUsernameValidation('AlphaBeta22')).toBe(true);
});

test('CodelandUsernameValidation, testUser_1', () => {
  expect(CodelandUsernameValidation('testUser_1')).toBe(true);
});

test('CodelandUsernameValidation, User_', () => {
  expect(CodelandUsernameValidation('User_')).toBe(false);
});

test('CodelandUsernameValidation, dev2024', () => {
  expect(CodelandUsernameValidation('dev2024')).toBe(true);
});

test('CodelandUsernameValidation, a', () => {
  expect(CodelandUsernameValidation('a')).toBe(false);
});

test('CodelandUsernameValidation, LongUsername_1234567890123456', () => {
  expect(CodelandUsernameValidation('LongUsername_1234567890123456')).toBe(false);
});

test('CodelandUsernameValidation, codeMaster', () => {
  expect(CodelandUsernameValidation('codeMaster')).toBe(true);
});

test('CodelandUsernameValidation, Special!User', () => {
  expect(CodelandUsernameValidation('Special!User')).toBe(false);
});