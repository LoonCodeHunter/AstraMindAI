import { Header } from '@components/layout/Header';
import Sidebar from '@components/layout/Sidebar';
import { ChatWindow } from '@components/ChatWindow';

export function HomePage() {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main>
        <ChatWindow />
      </main>
    </div>
  );
}
