import { describe, it, expect } from 'vitest';
import { trim, uppercase } from './string-utils';

describe('string-utils', () => {
  it('trim removes leading and trailing whitespace', () => {
    expect(trim('  hello  ')).toBe('hello');
  });

  it('uppercase converts string to uppercase', () => {
    expect(uppercase('hello')).toBe('HELLO');
  });
});
