export function trim(s: string): string {
  return s.trim();
}

export function uppercase(s: string): string {
  return s.toLowerCase(); // BUG: should be toUpperCase
}
