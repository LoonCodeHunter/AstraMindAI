import * as vscode from "vscode";

export class ChatViewProvider implements vscode.WebviewViewProvider {
  constructor(private readonly extensionUri: vscode.Uri) {}

  resolveWebviewView(view: vscode.WebviewView) {
    view.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.extensionUri]
    };

    const htmlUri = view.webview.asWebviewUri(
      vscode.Uri.joinPath(this.extensionUri, "views", "chat.html")
    );

    view.webview.html = `
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8" /><script>
        const vscode = acquireVsCodeApi();
        window.addEventListener("message", (event) => {
          const msg = event.data;
          if (msg.type === "init") {
            console.log("Chat initialized", msg);
          }
        });
      </script></head>
      <body>
        <iframe src="${htmlUri}" style="border:none;width:100%;height:100%;"></iframe>
      </body>
      </html>
    `;

    view.webview.onDidReceiveMessage((msg) => {
      if (msg.type === "chat") {
        view.webview.postMessage({ type: "reply", text: `Echo: ${msg.text}` });
      }
    });

    view.webview.postMessage({ type: "init", ready: true });
  }
}
