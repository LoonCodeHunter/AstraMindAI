import { ModelService } from '../services/ModelService';

const modelService = new ModelService();

export class ModelsController {
  async list() {
    return modelService.listModels();
  }
}
