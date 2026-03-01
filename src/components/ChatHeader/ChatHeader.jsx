import { useNavigate } from 'react-router-dom';
import { BackArrowIcon } from '../icons/index';
import './ChatHeader.css';

export const ChatHeader = ({ contact }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="chat-header">
      <button className="back-btn" onClick={handleBack} title="Volver">
        <BackArrowIcon />
      </button>
      <img 
        src={contact.profile_picture} 
        alt={contact.name} 
        className="chat-avatar"
      />
      <div className="chat-contact-info">
        <span className="chat-contact-name">{contact.name}</span>
        <span className="chat-contact-status">{contact.last_time_connection}</span>
      </div>
    </div>
  );
};
