import * as vscode from "vscode";
import { generateShortText } from "../templates/ap-templates";

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

async function activePiecesProp() {
  var picked = await vscode.window.showQuickPick(
    ["Short Text", "number", "boolean"],
    { placeHolder: "Select prop type" },
  );

  const isRequired = vscode.workspace
    .getConfiguration("easyprops")
    .get<boolean>("getRequired", true);

  var output = "";

  switch (picked) {
    case "Short Text":
      output = generateShortText(isRequired);
      break;
    case "number":
      output = "this is a number";
      break;
    case "boolean":
      output = "this is a boolean";
      break;
    default:
      break;
  }

  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  editor.edit((editBuilder) => {
    const position = editor.selection.active;
    editBuilder.insert(position, output);
  });
}
