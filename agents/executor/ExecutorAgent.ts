import {
  ExecutionContext,
  ExecutionResult,
  ExecutionStrategy,
  defaultExecutionStrategies,
} from './execution-strategies';

export class ExecutorAgent {
  private strategies: Map<string, ExecutionStrategy>;

  constructor(strategies: ExecutionStrategy[] = defaultExecutionStrategies) {
    this.strategies = new Map(strategies.map((s) => [s.name, s]));
  }

  registerStrategy(strategy: ExecutionStrategy): void {
    this.strategies.set(strategy.name, strategy);
  }

  async execute(
    context: ExecutionContext,
    strategyName: string = 'sandbox',
  ): Promise<ExecutionResult> {
    const strategy = this.strategies.get(strategyName);

    if (!strategy) {
      throw new Error(`Execution strategy "${strategyName}" not found`);
    }

    return strategy.execute(context);
  }
}
