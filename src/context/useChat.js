import { createContext, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export const ChatContext = createContext();
export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useChat = () => {
  const { contacts, handleSendMessage } = useContext(ChatContext);
  const { contact_id } = useParams();

  const selectedContactId = contact_id ? parseInt(contact_id, 10) : null;
  const selectedContact = contacts.find(c => c.id === selectedContactId) || null;

  return {
    contacts,
    handleSendMessage,
    selectedContactId,
    selectedContact
  };
};

export const useIsHomePage = () => {
  const location = useLocation();
  return location.pathname === '/';
};
