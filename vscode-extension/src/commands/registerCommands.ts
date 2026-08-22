import * as vscode from "vscode";
import { chatCommand } from "./chatCommand";

export function registerCommands(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("astramind.chat", () => {
      vscode.window.showInformationMessage("Chat triggered.");
    })
  );
}
