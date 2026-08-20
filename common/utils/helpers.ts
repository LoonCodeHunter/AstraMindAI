export function assertDefined<T>(value: T | undefined | null, message = 'Value must be defined'): T {
  if (value === undefined || value === null) {
    throw new Error(message);
  }
  return value;
}

export function toISODate(date: Date | string): string {
  return typeof date === 'string' ? new Date(date).toISOString() : date.toISOString();
}
