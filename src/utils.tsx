// This is a helper to allow you to "map" for a dynamic number of items in react
export function arrayToX(x: number): null[] {
  return Array.from({ length: x });
}
