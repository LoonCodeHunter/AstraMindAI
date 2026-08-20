export class ModelService {
  async listModels() {
    return [
      { id: 'astramind-v1', status: 'deprecated' },
      { id: 'astramind-v2', status: 'active' },
    ];
  }
}
