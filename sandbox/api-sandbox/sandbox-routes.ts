export function sandboxRoutes() {
  return {
    chat: (msg: string) => `Sandbox reply: ${msg}`,
    models: () => ["sandbox-model-1", "sandbox-model-2"]
  };
}
