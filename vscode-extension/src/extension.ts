import * as vscode from "vscode";
import axios from "axios";

const EXTENSION_NAME = "AstraMindAI";
const CHAT_VIEW_ID = "astramind.chatView";

let chatPanel: vscode.WebviewView | undefined;

export function activate(context: vscode.ExtensionContext) {
  const output = vscode.window.createOutputChannel(EXTENSION_NAME);

  output.appendLine(`[${EXTENSION_NAME}] Extension activated`);

  // Chat view provider
  const chatProvider: vscode.WebviewViewProvider = {
    resolveWebviewView(webviewView: vscode.WebviewView) {
      chatPanel = webviewView;
      webviewView.webview.options = {
        enableScripts: true
      };

      webviewView.webview.html = getChatHtml();

      webviewView.webview.onDidReceiveMessage(async (message) => {
        if (message.type === "chat") {
          const reply = await sendChatToBackend(message.text, output);
          webviewView.webview.postMessage({ type: "reply", text: reply });
        }
      });
    }
  };

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(CHAT_VIEW_ID, chatProvider)
  );

  // Commands
  context.subscriptions.push(
    vscode.commands.registerCommand("astramind.chat", async () => {
      const input = await vscode.window.showInputBox({
        prompt: "Ask AstraMindAI"
      });
      if (!input) return;

      const reply = await sendChatToBackend(input, output);
      vscode.window.showInformationMessage(`AstraMindAI: ${reply}`);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("astramind.explainCode", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage("No active editor.");
        return;
      }

      const selection = editor.selection;
      const code = editor.document.getText(selection.isEmpty ? undefined : selection);

      const prompt = `Explain the following code:\n\n${code}`;
      const reply = await sendChatToBackend(prompt, output);
      vscode.window.showInformationMessage(`Explanation: ${reply}`);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("astramind.generateDocs", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage("No active editor.");
        return;
      }

      const selection = editor.selection;
      const code = editor.document.getText(selection.isEmpty ? undefined : selection);

      const prompt = `Generate documentation comments for this code:\n\n${code}`;
      const reply = await sendChatToBackend(prompt, output);
      vscode.window.showInformationMessage(`Docs: ${reply}`);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("astramind.refactor", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage("No active editor.");
        return;
      }

      const selection = editor.selection;
      const code = editor.document.getText(selection.isEmpty ? undefined : selection);

      const prompt = `Refactor this code to be cleaner and more efficient:\n\n${code}`;
      const reply = await sendChatToBackend(prompt, output);
      vscode.window.showInformationMessage(`Refactor suggestion: ${reply}`);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("astramind.switchModel", async () => {
      const model = await vscode.window.showQuickPick(
        ["default", "fast", "creative", "code"],
        { placeHolder: "Choose AstraMind model" }
      );
      if (!model) return;

      vscode.workspace.getConfiguration("astramind").update("model", model, true);
      vscode.window.showInformationMessage(`AstraMind model set to: ${model}`);
    })
  );
}

export function deactivate() {
  // Nothing special for now
}

async function sendChatToBackend(prompt: string, output: vscode.OutputChannel): Promise<string> {
  try {
    const config = vscode.workspace.getConfiguration("astramind");
    const apiUrl = config.get<string>("apiUrl") || "http://localhost:8000/api/chat";
    const apiKey = config.get<string>("apiKey") || "";

    output.appendLine(`[${EXTENSION_NAME}] Sending prompt to backend: ${prompt}`);

    const response = await axios.post(
      apiUrl,
      { prompt },
      {
        headers: {
          "Content-Type": "application/json",
          ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {})
        },
        timeout: 30000
      }
    );

    const text = response.data?.reply ?? "No reply from AstraMindAI.";
    output.appendLine(`[${EXTENSION_NAME}] Received reply: ${text}`);
    return text;
  } catch (err: any) {
    const message = err?.message || "Unknown error";
    output.appendLine(`[${EXTENSION_NAME}] Error: ${message}`);
    vscode.window.showErrorMessage(`AstraMindAI error: ${message}`);
    return "Sorry, something went wrong talking to AstraMindAI.";
  }
}

function getChatHtml(): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <style>
        body {
          font-family: system-ui, sans-serif;
          margin: 0;
          padding: 0;
        }
        .container {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        .messages {
          flex: 1;
          padding: 8px;
          overflow-y: auto;
          background: #111827;
          color: #e5e7eb;
        }
        .input {
          display: flex;
          padding: 8px;
          border-top: 1px solid #374151;
          background: #1f2937;
        }
        input[type="text"] {
          flex: 1;
          padding: 6px 8px;
          border-radius: 4px;
          border: 1px solid #4b5563;
          background: #111827;
          color: #e5e7eb;
        }
        button {
          margin-left: 8px;
          padding: 6px 12px;
          border-radius: 4px;
          border: none;
          background: #3b82f6;
          color: white;
          cursor: pointer;
        }
        .message-user {
          margin-bottom: 4px;
          color: #93c5fd;
        }
        .message-ai {
          margin-bottom: 8px;
          color: #a7f3d0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div id="messages" class="messages"></div>
        <div class="input">
          <input id="input" type="text" placeholder="Ask AstraMindAI..." />
          <button id="send">Send</button>
        </div>
      </div>
      <script>
        const vscode = acquireVsCodeApi();
        const messagesEl = document.getElementById("messages");
        const inputEl = document.getElementById("input");
        const sendBtn = document.getElementById("send");

        function appendMessage(text, type) {
          const div = document.createElement("div");
          div.className = type === "user" ? "message-user" : "message-ai";
          div.textContent = (type === "user" ? "You: " : "AstraMindAI: ") + text;
          messagesEl.appendChild(div);
          messagesEl.scrollTop = messagesEl.scrollHeight;
        }

        sendBtn.addEventListener("click", () => {
          const text = inputEl.value.trim();
          if (!text) return;
          appendMessage(text, "user");
          vscode.postMessage({ type: "chat", text });
          inputEl.value = "";
        });

        window.addEventListener("message", (event) => {
          const message = event.data;
          if (message.type === "reply") {
            appendMessage(message.text, "ai");
          }
        });
      </script>
    </body>
    </html>
  `;
}
