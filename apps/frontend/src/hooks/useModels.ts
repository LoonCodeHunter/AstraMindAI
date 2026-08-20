import { useEffect, useState } from 'react';
import { apiClient } from '@services/apiClient';

interface Model {
  id: string;
  status: string;
}

export function useModels() {
  const [models, setModels] = useState<Model[]>([]);

  useEffect(() => {
    apiClient.get('/models').then((res) => setModels(res.data));
  }, []);

  return { models };
}
