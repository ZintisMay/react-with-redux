export function arrayToX(x: number): null[] {
  return Array.from({ length: x }).map(() => null);
}
