export function numberToPixel(number = 0): string {
  return number === 0 ? number.toString() : `${number}px`;
}