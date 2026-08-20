import { PlannerConfig, defaultPlannerConfig } from './planner.config';
import { PlanningStrategy, Plan, defaultPlanningStrategies } from './planning-strategies';

export class PlannerAgent {
  private strategies: Map<string, PlanningStrategy>;
  private config: PlannerConfig;

  constructor(
    strategies: PlanningStrategy[] = defaultPlanningStrategies,
    config: PlannerConfig = defaultPlannerConfig,
  ) {
    this.strategies = new Map(strategies.map((s) => [s.name, s]));
    this.config = config;
  }

  plan(taskDescription: string, strategyName: string = 'simple'): Plan {
    const strategy = this.strategies.get(strategyName);

    if (!strategy) {
      throw new Error(`Planning strategy "${strategyName}" not found`);
    }

    const plan = strategy.generatePlan(taskDescription);

    if (plan.steps.length > this.config.maxSteps) {
      plan.steps = plan.steps.slice(0, this.config.maxSteps);
    }

    return plan;
  }
}
