import { useState } from 'react';
import { PlusIcon, EmojiIcon, SendIcon, MicIcon } from '../icons/index';
import './MessageInput.css';

export const MessageInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="message-input-container">
      <form className="message-input" onSubmit={handleSubmit}>
        <button type="button" className="input-icon-btn">
          <PlusIcon width={24} height={24} />
        </button>
        <div className="input-wrapper">
          <button type="button" className="emoji-btn">
            <EmojiIcon width={24} height={24} />
          </button>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="input-field"
          />
        </div>
        {text.trim() ? (
          <button type="submit" className="send-button">
            <SendIcon />
          </button>
        ) : (
          <button type="button" className="mic-button">
            <MicIcon width={24} height={24} />
          </button>
        )}
      </form>
    </div>
  );
};
