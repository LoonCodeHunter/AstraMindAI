export type AstraEvent =
  | { type: "startup"; timestamp: number }
  | { type: "messageSent"; id: string }
  | { type: "messageReceived"; id: string }
  | { type: "error"; message: string };
