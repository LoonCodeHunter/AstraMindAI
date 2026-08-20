interface Props {
  id: string;
  summary: string;
  onSelect: (id: string) => void;
}

export function ConversationItem({ id, summary, onSelect }: Props) {
  return (
    <div className="conversation-item" onClick={() => onSelect(id)}>
      <span>{summary}</span>
    </div>
  );
}
