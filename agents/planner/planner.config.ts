export type PlannerConfig = {
  maxSteps: number;
  allowParallel: boolean;
  safetyLevel: 'strict' | 'balanced' | 'experimental';
};

export const defaultPlannerConfig: PlannerConfig = {
  maxSteps: 8,
  allowParallel: true,
  safetyLevel: 'strict',
};
