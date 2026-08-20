import { useSettings } from '@hooks/useSettings';

export function ModelSettings() {
  const { settings, updateSettings } = useSettings();

  return (
    <section>
      <h2>Model Settings</h2>
      <p>Current model: {settings.model}</p>
      <button onClick={() => updateSettings({ model: 'astramind-v2' })}>
        Use astramind-v2
      </button>
    </section>
  );
}
