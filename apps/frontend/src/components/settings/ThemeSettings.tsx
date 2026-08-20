import { useTheme } from '@context/ThemeContext';

export function ThemeSettings() {
  const { theme, setTheme } = useTheme();

  return (
    <section>
      <h2>Theme</h2>
      <p>Current: {theme}</p>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </section>
  );
}
