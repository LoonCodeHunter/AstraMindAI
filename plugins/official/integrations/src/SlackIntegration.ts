export class SlackIntegration {
  sendMessage(channel: string, message: string) {
    return `Message sent to ${channel}: ${message}`;
  }
}
