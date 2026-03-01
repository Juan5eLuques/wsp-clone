import { useChat, useIsHomePage } from '../../context/useChat';
import { ContactItem } from '../ContactItem/ContactItem';
import { ChatsIcon, StatusIcon, ChannelsIcon, CommunitiesIcon, SettingsIcon, NewChatIcon, MenuIcon, SearchIcon, PlusIcon, NotificationsOffIcon, ArchiveIcon, MetaAIIcon, CameraIcon } from '../icons/index';
import { BottomNav } from '../BottomNav/BottomNav';
import './ContactList.css';

export const ContactList = () => {
  const { contacts } = useChat();
  const isHomePage = useIsHomePage();

  return (
    <div className={`sidebar-container ${!isHomePage ? 'hidden-mobile' : ''}`}>
      <nav className="nav-sidebar">
        <div className="nav-icons-top">
          <button className="nav-icon active" title="Chats">
            <ChatsIcon width={24} height={24} />
          </button>
          <button className="nav-icon" title="Estados">
            <StatusIcon width={24} height={24} />
          </button>
          <button className="nav-icon" title="Canales">
            <ChannelsIcon width={24} height={24} />
          </button>
          <button className="nav-icon" title="Comunidades">
            <CommunitiesIcon width={24} height={24} />
          </button>
        </div>
        <div className="nav-icons-bottom">
          <button className="nav-icon" title="Meta AI">
            <MetaAIIcon width={24} height={24} />
          </button>
          <button className="nav-icon" title="Configuración">
            <SettingsIcon width={24} height={24} />
          </button>
          <div className="nav-profile">
            <img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/255010212_562772925170862_1543126857073167419_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa3wGE-zhmcWC5SdsM9s3448xbH_yGPAoo3J4rz8TDLh_vFA&oe=69A9E463&_nc_sid=5e03e0&_nc_cat=110" alt="perfil" />
          </div>
        </div>
      </nav>

      <div className="contact-list">
        <div className="contact-list-header">
          <h1>WhatsApp</h1>
          <div className="header-actions">
            <button className="header-btn camera-btn" title="Cámara">
              <CameraIcon />
            </button>
            <button className="header-btn new-chat-btn" title="Nuevo chat">
              <NewChatIcon />
            </button>
            <button className="header-btn" title="Menú">
              <MenuIcon />
            </button>
          </div>
        </div>

        <div className="search-container">
          <div className="search-box">
            <SearchIcon />
            <input type="text" placeholder="Preguntar a Meta AI o buscar" />
          </div>
        </div>

        <div className="filters-container">
          <button className="filter-btn active">Todos</button>
          <button className="filter-btn">No leídos</button>
          <button className="filter-btn">Favoritos</button>
          <button className="filter-btn">Grupos</button>
          <button className="filter-btn filter-plus">
            <PlusIcon />
          </button>
        </div>

        <div className="notification-banner">
          <div className="notification-icon">
            <NotificationsOffIcon width={24} height={24} />
          </div>
          <div className="notification-text">
            <span>Las notificaciones de mensajes están desactivadas.
              <button className="activate-btn">Activar</button>
            </span>
            
          </div>
          <button className="notification-close">×</button>
        </div>

        <div className="archived-section">
          <div className="archived-icon">
            <ArchiveIcon />
          </div>
          <span className="archived-text">Archivados</span>
          <span className="archived-count">4</span>
        </div>

        <div className="contact-list-items">
          {contacts.map(contact => (
            <ContactItem 
              key={contact.id} 
              contact={contact} 
            />
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
