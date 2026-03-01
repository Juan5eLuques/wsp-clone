import { ChatsIcon, StatusIcon, CommunitiesIcon, PhoneIcon } from '../icons/index';
import './BottomNav.css';

export const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <button className="bottom-nav-item active">
        <ChatsIcon width={24} height={24} />
        <span>Chats</span>
      </button>
      <button className="bottom-nav-item">
        <div className="bottom-nav-badge">
          <StatusIcon width={24} height={24} />
        </div>
        <span>Novedades</span>
      </button>
      <button className="bottom-nav-item">
        <CommunitiesIcon width={24} height={24} />
        <span>Comunidades</span>
      </button>
      <button className="bottom-nav-item">
        <PhoneIcon width={24} height={24} />
        <span>Llamadas</span>
      </button>
    </nav>
  );
};
