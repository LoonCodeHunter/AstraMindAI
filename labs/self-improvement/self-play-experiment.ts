export function selfPlayExperiment(prompt: string) {
  return {
    prompt,
    result: `Self-play result for: ${prompt}`,
    metadata: { mode: "self-play" }
  };
}
 