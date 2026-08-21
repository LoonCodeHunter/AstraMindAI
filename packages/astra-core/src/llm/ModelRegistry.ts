export class ModelRegistry {
  private models = new Map<string, any>();

  register(name: string, model: any) {
    this.models.set(name, model);
  }

  get(name: string) {
    return this.models.get(name);
  }
}

