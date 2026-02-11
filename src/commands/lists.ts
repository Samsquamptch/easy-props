import * as vscode from "vscode";
import { listBuilder } from "../utils/list-builder";
import { insertText } from "../utils/insert-text";

export function registerListCommands(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("easyprops.addList", addList),
  );
}

async function addList() {
  const listLength = await vscode.window.showQuickPick(
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    { placeHolder: "Select the length of the list" },
  );

  if (!listLength) return;

  const createdList = listBuilder(Number(listLength))

  insertText(createdList)
}
