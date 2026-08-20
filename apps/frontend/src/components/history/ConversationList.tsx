interface Conversation {
  id: string;
  summary: string;
}

interface Props {
  conversations: Conversation[];
  onSelect: (id: string) => void;
}

export function ConversationList({ conversations, onSelect }: Props) {
  return (
    <div className="conversation-list">
      {conversations.map((c) => (
        <ConversationItem key={c.id} id={c.id} summary={c.summary} onSelect={onSelect} />
      ))}
    </div>
  );
}
