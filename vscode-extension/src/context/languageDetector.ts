export function detectLanguage(fileName: string) {
  return fileName.split(".").pop() || "unknown";
}
