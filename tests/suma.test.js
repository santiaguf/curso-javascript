/* eslint-disable no-undef */
import { suma, demoFunction } from '../src/suma';

test('sumar 1+2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

describe('demoFunction', () => {
  it('is a function', () => {
    expect(typeof demoFunction).toBe('function');
  });
});
