import { useSettingsContext } from '@context/SettingsContext';

export function useSettings() {
  const { settings, updateSettings } = useSettingsContext();
  return { settings, updateSettings };
}
