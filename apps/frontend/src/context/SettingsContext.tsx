import { createContext, useContext, useState, ReactNode } from 'react';

interface Settings {
  model: string;
  privacy: string;
  theme: string;
}

interface SettingsContextValue {
  settings: Settings;
  updateSettings: (partial: Partial<Settings>) => void;
}

const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>({
    model: 'astramind-v2',
    privacy: 'standard',
    theme: 'dark'
  });

  const updateSettings = (partial: Partial<Settings>) =>
    setSettings((prev) => ({ ...prev, ...partial }));

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  const ctx = SettingsContext.useContext?.() ?? useContext(SettingsContext);
  if (!ctx) throw new Error('SettingsContext not found');
  return ctx;
}
