import { useState } from 'react';
import { ChatContext, AuthContext } from './useChat';
import contactsData from '../data/contacts';

export const ChatProvider = ({ children }) => {

  const [contacts, setContacts] = useState(contactsData);

  // Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    setIsLoading(true);
   
  };

  const finishLoading = () => {
    setIsLoading(false);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsLoading(false);
  };

  // Agrega un nuevo mensaje al contacto indicado
  const handleSendMessage = (contactId, text) => {
    const newMessage = {
      id: Date.now(),
      text,
      send_by_me: true,
      created_at: new Date().toISOString(),
      is_read: false
    };

    // Recorremos los contactos y al que coincida le agregamos el mensaje
    const newContacts = contacts.map(contact => {
        if (contact.id === contactId) {
          return {
            ...contact,
            messages: [...contact.messages, newMessage]
          };
        }
        return contact;
      })

    setContacts(newContacts);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, finishLoading, logout }}>
      <ChatContext.Provider value={{ contacts, handleSendMessage }}>
        {children}
      </ChatContext.Provider>
    </AuthContext.Provider>
  );
};
