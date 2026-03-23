import { describe, it, expect } from 'vitest';
import { trim } from './string-utils';

describe('string-utils', () => {
  it('trim removes leading and trailing whitespace', () => {
    expect(trim('  hello  ')).toBe('hello');
  });
});
