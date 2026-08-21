export class ModelRouter {
  constructor(private registry: any) {}

  route(intent: string) {
    if (intent === "chat") return this.registry.get("astramind-v2");
    if (intent === "embed") return this.registry.get("astramind-embed-v1");
    return this.registry.get("astramind-v1");
  }
}
