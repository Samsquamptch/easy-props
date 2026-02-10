import * as vscode from "vscode";

export function registerPropCommands(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("easyprops.addProp", addProp),
  );
}

async function addProp() {
  const picked = await vscode.window.showQuickPick(
    ["string", "number", "boolean"],
    { placeHolder: "Select prop type" },
  );

  var output = "";

  switch (picked) {
    case "string":
      output = "this is a string";
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

  const isRequired = vscode.workspace
    .getConfiguration("easyprops")
    .get<boolean>("getRequired", true);

  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  editor.edit((editBuilder) => {
    const position = editor.selection.active;
    editBuilder.insert(position, output + "Prop setting is " + isRequired);
  });
}
