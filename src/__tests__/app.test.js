import showHealthLevel from '../app';

test.each([
  [{ name: 'лучник', health: 0 }, null],
  [{ name: 'маг', health: 50 }, 'wounded'],
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 100 }, 'healthy'],
])('should get helthLevel for character %s', (character, expected) => {
  const result = showHealthLevel(character);

  expect(result).toBe(expected);
});
