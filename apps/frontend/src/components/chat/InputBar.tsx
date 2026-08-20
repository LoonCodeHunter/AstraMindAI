import { useState } from 'react';

interface Props {
  onSend: (text: string) => void;
}

export function InputBar({ onSend }: Props) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value.trim());
    setValue('');
  };

  return (
    <div className="input-bar">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
