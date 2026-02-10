import * as vscode from "vscode";

export function returnAuthName() {
  var authName = vscode.workspace
    .getConfiguration("easyprops")
    .get<string>("authName");

  return authName;
}
