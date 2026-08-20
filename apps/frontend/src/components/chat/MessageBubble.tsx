import type { ChatMessage } from '@utils/formatters';

interface Props {
  message: ChatMessage;
}

export function MessageBubble({ message }: Props) {
  return (
    <div className={`message-bubble message-bubble--${message.role}`}>
      <span>{message.content}</span>
    </div>
  );
}
