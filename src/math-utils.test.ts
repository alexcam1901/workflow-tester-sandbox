import { describe, it, expect } from 'vitest';
import { clamp } from './math-utils';

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
});
