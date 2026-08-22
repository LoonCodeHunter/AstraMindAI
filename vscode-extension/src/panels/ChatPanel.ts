import * as vscode from "vscode";

export class ChatPanel implements vscode.WebviewViewProvider {
  constructor(private context: vscode.ExtensionContext) {}

  resolveWebviewView(view: vscode.WebviewView) {
    view.webview.html = "<h1>AstraMind Chat</h1>";
  }
}
