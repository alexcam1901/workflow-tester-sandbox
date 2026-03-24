import { describe, it, expect } from 'vitest';
import { clamp, modulo } from './math-utils';

describe('math-utils', () => {
  it('clamp returns value when within range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('clamp returns min when value is below range', () => {
    expect(clamp(-1, 0, 10)).toBe(0);
  });

  it('clamp returns max when value is above range', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('modulo returns the remainder', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  it('modulo returns 0 when evenly divisible', () => {
    expect(modulo(9, 3)).toBe(0);
  });
});
