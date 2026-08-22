import * as vscode from "vscode";
import { registerCommands } from "./commands/registerCommands";
import { ChatPanel } from "./panels/ChatPanel";

export function activate(context: vscode.ExtensionContext) {
  registerCommands(context);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "astramind.chatView",
      new ChatPanel(context)
    )
  );
}

export function deactivate() {}
