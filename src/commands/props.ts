import * as vscode from "vscode";
import { activePiecesProp } from "../activepieces/ap-props"

export function registerPropCommands(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("easyprops.addProp", addProp),
  );
}

async function addProp() {
  const workflowProvider = vscode.workspace
    .getConfiguration("easyprops")
    .get<string>("workflowProvider");

  switch (workflowProvider) {
    case "ActivePieces":
      activePiecesProp();
      break;
  }
}
