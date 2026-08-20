import { Header } from '@components/layout/Header';
import Sidebar from '@components/layout/Sidebar';
import { ModelSettings } from '@components/settings/ModelSettings';
import { PrivacySettings } from '@components/settings/PrivacySettings';
import { ThemeSettings } from '@components/settings/ThemeSettings';

export function SettingsPage() {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main>
        <ModelSettings />
        <PrivacySettings />
        <ThemeSettings />
      </main>
    </div>
  );
}
