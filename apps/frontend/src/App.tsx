import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SettingsPage } from './pages/SettingsPage';
import { ChatPage } from './routes/ChatPage';
import { HistoryPage } from './routes/HistoryPage';
import { ModelsPage } from './routes/ModelsPage';
import { SettingsPage as SettingsRoutePage } from './routes/SettingsPage';
import { ThemeProvider } from './context/ThemeContext';
import { SettingsProvider } from './context/SettingsContext';
import { UserProvider } from './context/UserContext';

export function App() {
  return (
    <UserProvider>
      <SettingsProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/models" element={<ModelsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/settings/advanced" element={<SettingsRoutePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ThemeProvider>
      </SettingsProvider>
    </UserProvider>
  );
}
