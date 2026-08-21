export function mapRole(userId: string) {
  return userId === "admin-1" ? "admin" : "developer";
}
