export function PluginCard({ name }: { name: string }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        width: "200px"
      }}
    >
      <h3>{name}</h3>
      <p>Community plugin for AstraMindAI.</p>
    </div>
  );
}
