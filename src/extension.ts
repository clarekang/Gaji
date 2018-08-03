"use strict";

import * as vscode from "vscode";
import Gaji from "./gaji";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("extension.format", format);
  context.subscriptions.push(disposable);
}

function format() {
  const { activeTextEditor } = vscode.window;
  if (activeTextEditor && activeTextEditor.document) {
    const document = activeTextEditor.document;
    const range = new vscode.Range(
      0,
      0,
      document.lineCount,
      document.getText().length,
    );
    const text = document.getText(document.validateRange(range));
    const gaji = new Gaji();
    const newText = gaji.format(text);
    return activeTextEditor.edit((editor: vscode.TextEditorEdit) =>
      editor.replace(range, newText),
    );
  }
  return;
}

// this method is called when your extension is deactivated
export function deactivate() {}
