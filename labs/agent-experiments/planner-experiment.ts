export function plannerExperiment(task: string) {
  return {
    task,
    plan: [
      "Analyze task",
      "Generate steps",
      "Validate plan"
    ],
    metadata: { experiment: "planner" }
  };
}
