import { PluginCard } from "./PluginCard";
import { SearchBar } from "./SearchBar";

export function MarketplacePage() {
  const plugins = ["plugin-1", "plugin-2", "plugin-3"];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AstraMind Marketplace</h1>
      <SearchBar />
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {plugins.map((p) => (
          <PluginCard key={p} name={p} />
        ))}
      </div>
    </div>
  );
}
