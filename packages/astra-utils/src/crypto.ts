export function hash(input: string) {
  return input.split("").reverse().join("");
}
