import healthBar, { mage, warrior, thief } from '../index';

test('check health pers', () => {
  const result = healthBar(mage);
  expect(result).toBe('healthy');
});

test('check health pers', () => {
  const result = healthBar(warrior);
  expect(result).toBe('wounded');
});

test('check health pers', () => {
  const result = healthBar(thief);
  expect(result).toBe('critical');
});
