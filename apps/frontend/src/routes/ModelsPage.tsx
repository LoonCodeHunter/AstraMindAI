import { useModels } from '@hooks/useModels';
import { ModelSelector } from '@components/models/ModelSelector';

export function ModelsPage() {
  const { models } = useModels();

  return (
    <ModelSelector
      models={models}
      selectedId={models[0]?.id ?? ''}
      onChange={(id) => console.log('Selected model', id)}
    />
  );
}
