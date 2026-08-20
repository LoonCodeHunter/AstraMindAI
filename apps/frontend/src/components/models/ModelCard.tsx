interface Props {
  id: string;
  status: string;
  onSelect: (id: string) => void;
}

export function ModelCard({ id, status, onSelect }: Props) {
  return (
    <div className="model-card" onClick={() => onSelect(id)}>
      <h3>{id}</h3>
      <p>Status: {status}</p>
    </div>
  );
}
