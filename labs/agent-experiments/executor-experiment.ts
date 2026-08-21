export async function executorExperiment(code: string) {
  return {
    input: code,
    output: `Executed: ${code.slice(0, 20)}...`,
    metadata: { experiment: "executor" }
  };
}
