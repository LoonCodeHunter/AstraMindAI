export type ExecutionContext = {
  userId: string;
  sessionId: string;
  taskId: string;
  code: string;
  language: 'typescript' | 'javascript' | 'python' | 'bash';
  timeoutMs?: number;
};

export type ExecutionResult = {
  success: boolean;
  output: string;
  error?: string;
  durationMs: number;
};

export interface ExecutionStrategy {
  name: string;
  execute(context: ExecutionContext): Promise<ExecutionResult>;
}

export class SandboxExecutionStrategy implements ExecutionStrategy {
  name = 'sandbox';

  async execute(context: ExecutionContext): Promise<ExecutionResult> {
    const start = performance.now();

    // In a real system, this would call out to a secure sandbox service.
    // Here we just simulate execution.
    try {
      const simulatedOutput = `Executed ${context.language} code for task ${context.taskId}`;
      return {
        success: true,
        output: simulatedOutput,
        durationMs: performance.now() - start,
      };
    } catch (err: any) {
      return {
        success: false,
        output: '',
        error: err?.message ?? 'Unknown execution error',
        durationMs: performance.now() - start,
      };
    }
  }
}

export class DryRunExecutionStrategy implements ExecutionStrategy {
  name = 'dry-run';

  async execute(context: ExecutionContext): Promise<ExecutionResult> {
    const start = performance.now();
    return {
      success: true,
      output: `Dry-run: validated code for task ${context.taskId}`,
      durationMs: performance.now() - start,
    };
  }
}

export const defaultExecutionStrategies: ExecutionStrategy[] = [
  new SandboxExecutionStrategy(),
  new DryRunExecutionStrategy(),
];
