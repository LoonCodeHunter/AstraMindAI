import { useSettings } from '@hooks/useSettings';

export function PrivacySettings() {
  const { settings, updateSettings } = useSettings();

  return (
    <section>
      <h2>Privacy Settings</h2>
      <p>Level: {settings.privacy}</p>
      <button onClick={() => updateSettings({ privacy: 'strict' })}>
        Set strict privacy
      </button>
    </section>
  );
}
