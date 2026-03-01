import { useAuth, useIsHomePage } from '../../context/useChat';
import { ContactList } from '../ContactList/ContactList';
import './Layout.css';

export const Layout = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const isHomePage = useIsHomePage();

  // No renderizar el layout si no está autenticado o está cargando
  if (!isAuthenticated || isLoading) {
    return null;
  }

  return (
    <div className="layout">
      <ContactList />
      <div className={`layout-content ${isHomePage ? 'hidden-mobile' : ''}`}>
        {children}
      </div>
    </div>
  );
};
