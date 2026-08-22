export function inlineSuggestions(code: string) {
  return [`Suggestion for: ${code.slice(0, 20)}`];
}
