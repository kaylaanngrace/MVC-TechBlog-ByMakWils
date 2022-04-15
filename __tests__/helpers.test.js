const {format_date, format_plural} = require('../utils/helpers');

test('format_plural() returns a pluralized word', () => {
  const word1 = format_plural('flower', 1);
  const word2 = format_plural('book', 2);

  expect(word1).toBe('flower');
  expect(word2).toBe('books');
});

test('format_date() returns a date string', () => {
  const date = new Date('2022-04-26 16:04:04');

  expect(format_date(date)).toBe('4/26/2022');
});