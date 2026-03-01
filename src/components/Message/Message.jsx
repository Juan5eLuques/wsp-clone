import { formatTime } from '../../utils/formatTime';
import './Message.css';

export const Message = ({ message }) => {
  return (
    <div className={`message ${message.send_by_me ? 'sent' : 'received'}`}>
      <div className="message-content">
        <span className="message-text">{message.text}</span>
        <span className="message-meta">
          <span className="message-time">{formatTime(message.created_at)}</span>
          {message.send_by_me && message.is_read && (
            <span className="message-status">✓✓</span>
          )}
        </span>
      </div>
    </div>
  );
};
