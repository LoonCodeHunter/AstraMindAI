import { useChat } from '@hooks/useChat';
import { MessageBubble } from './chat/MessageBubble';
import { InputBar } from './chat/InputBar';

export function ChatWindow() {
  const { messages, sendMessage } = useChat();

  return (
    <div className="chat-window">
      <div className="chat-window__messages">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </div>
      <InputBar onSend={sendMessage} />
    </div>
  );
}
