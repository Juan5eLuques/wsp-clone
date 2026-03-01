import { Link } from 'react-router-dom';
import { formatTime } from '../../utils/formatTime';
import './ContactItem.css';

export const ContactItem = ({ contact }) => {
  const lastMessage = contact.messages[contact.messages.length - 1];
  const lastMessageTime = lastMessage
    ? formatTime(lastMessage.created_at)
    : contact.last_time_connection;

  return (
    <Link 
      to={`/contacts/${contact.id}`} 
      className={`contact-item`}
    >
      <img 
        src={contact.profile_picture} 
        alt={contact.name} 
        className="contact-avatar"
      />
      <div className="contact-info">
        <div className="contact-header">
          <span className="contact-name">{contact.name}</span>
          <span className="contact-time">{lastMessageTime}</span>
        </div>
        <div className="contact-preview">
          {lastMessage && (
            <span className="last-message">
              {lastMessage.send_by_me && lastMessage.is_read && <span className="sent-indicator">✓✓ </span>}
              {lastMessage.text}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
