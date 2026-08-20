export class AppError extends Error {
  readonly code: string;
  readonly context?: Record<string, unknown>;

  constructor(message: string, code = 'APP_ERROR', context?: Record<string, unknown>) {
    super(message);
    this.code = code;
    this.context = context;
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
