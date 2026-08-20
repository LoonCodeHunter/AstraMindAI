export type PlanStep = {
  id: string;
  description: string;
  skill: string;
  parallelGroup?: string;
};

export type Plan = {
  taskId: string;
  steps: PlanStep[];
};

export interface PlanningStrategy {
  name: string;
  generatePlan(input: string): Plan;
}

export class SimplePlanningStrategy implements PlanningStrategy {
  name = 'simple';

  generatePlan(input: string): Plan {
    const taskId = `task-${Date.now()}`;

    return {
      taskId,
      steps: [
        {
          id: `${taskId}-1`,
          description: 'Understand user intent and constraints',
          skill: 'web-search',
        },
        {
          id: `${taskId}-2`,
          description: 'Draft solution using code-edit skill',
          skill: 'code-edit',
        },
        {
          id: `${taskId}-3`,
          description: 'Refine and validate solution',
          skill: 'code-edit',
        },
      ],
    };
  }
}

export const defaultPlanningStrategies: PlanningStrategy[] = [
  new SimplePlanningStrategy(),
];
