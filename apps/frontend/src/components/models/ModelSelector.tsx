interface Model {
  id: string;
  status: string;
}

interface Props {
  models: Model[];
  selectedId: string;
  onChange: (id: string) => void;
}

export function ModelSelector({ models, selectedId, onChange }: Props) {
  return (
    <div className="model-selector">
      {models.map((m) => (
        <button
          key={m.id}
          className={m.id === selectedId ? 'selected' : ''}
          onClick={() => onChange(m.id)}
        >
          {m.id} ({m.status})
        </button>
      ))}
    </div>
  );
}
