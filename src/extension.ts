import * as vscode from 'vscode';
import { registerPropCommands } from './commands/props';
import { registerListCommands } from './commands/lists';

export function activate(context: vscode.ExtensionContext) {
  registerPropCommands(context);
  registerListCommands(context);
}

export function deactivate() {}