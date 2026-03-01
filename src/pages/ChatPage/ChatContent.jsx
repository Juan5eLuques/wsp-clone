import { Navigate } from 'react-router-dom';
import { useChat } from '../../context/useChat';
import { ChatHeader } from '../../components/ChatHeader/ChatHeader';
import { Message } from '../../components/Message/Message';
import { MessageInput } from '../../components/MessageInput/MessageInput';
import './ChatContent.css';

export const ChatContent = () => {
  const { selectedContact, handleSendMessage } = useChat();
  
    if (!selectedContact) {
      return <Navigate to="/" replace />;
    }
  
    return (
      <div className="chat-view">
        <ChatHeader contact={selectedContact} />
        <div className="messages-container">
          {selectedContact.messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
        </div>
        <MessageInput onSend={(text) => handleSendMessage(selectedContact.id, text)} />
      </div>
    );
};
