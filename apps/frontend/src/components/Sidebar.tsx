import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="sidebar">
      <nav>
        <Link className={isActive('/') ? 'active' : ''} to="/">Home</Link>
        <Link className={isActive('/chat') ? 'active' : ''} to="/chat">Chat</Link>
        <Link className={isActive('/history') ? 'active' : ''} to="/history">History</Link>
        <Link className={isActive('/models') ? 'active' : ''} to="/models">Models</Link>
        <Link className={isActive('/settings') ? 'active' : ''} to="/settings">Settings</Link>
      </nav>
    </aside>
  );
}
