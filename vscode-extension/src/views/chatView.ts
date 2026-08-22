import * as vscode from "vscode";
import { AstraClient } from "../api/astraClient";
import { getContext } from "../astraContext";

export class ChatViewProvider implements vscode.WebviewViewProvider {
  private view?: vscode.WebviewView;
  private client = new AstraClient("https://api.astramind.ai");

  constructor(private readonly extensionUri: vscode.Uri) {}

  resolveWebviewView(view: vscode.WebviewView) {
    this.view = view;

    view.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.extensionUri]
    };

    const htmlUri = view.webview.asWebviewUri(
      vscode.Uri.joinPath(this.extensionUri, "views", "chat.html")
    );

    view.webview.html = `
      <!DOCTYPE html>
      <html>
      <body style="margin:0;padding:0;">
        <iframe src="${htmlUri}" style="border:none;width:100%;height:100%;"></iframe>
      </body>
      </html>
    `;

    view.webview.onDidReceiveMessage(async (msg) => {
      try {
        if (msg.type === "chat") {
          const context = getContext();
          const response = await this.client.chat(msg.text, context);

          this.post({ type: "reply", text: response.reply });
        }

        if (msg.type === "switchModel") {
          this.post({ type: "modelChanged", model: msg.model });
        }

        if (msg.type === "requestContext") {
          const ctx = getContext();
          this.post({ type: "context", ...ctx });
        }

        if (msg.type === "requestHistory") {
          this.post({
            type: "history",
            items: [
              { timestamp: "Today", preview: "Hello AstraMind!" },
              { timestamp: "Yesterday", preview: "Explain this code..." }
            ]
          });
        }

        if (msg.type === "settings") {
          this.post({ type: "settingsUpdated", key: msg.key, value: msg.value });
        }

      } catch (err: any) {
        this.post({ type: "error", text: err.message || "Unknown error" });
      }
    });

    this.post({ type: "init", ready: true });
  }

  private post(msg: any) {
    this.view?.webview.postMessage(msg);
  }
}
