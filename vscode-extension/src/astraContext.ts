import * as vscode from "vscode";

export function getContext() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return {};

  return {
    fileName: editor.document.fileName,
    language: editor.document.languageId,
    selection: editor.document.getText(editor.selection)
  };
}
