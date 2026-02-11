import * as vscode from "vscode";

export function insertText(stringText: string) {
    const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

    editor.edit((editBuilder) => {
    const position = editor.selection.active;
    editBuilder.insert(position, stringText);
  });
}