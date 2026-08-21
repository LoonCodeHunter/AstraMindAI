export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      style={{
        padding: "0.3rem 0.6rem",
        background: status === "ok" ? "#4caf50" : "#f44336",
        color: "#fff",
        borderRadius: "4px"
      }}
    >
      {status}
    </span>
  );
}
