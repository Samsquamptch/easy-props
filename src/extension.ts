import * as vscode from 'vscode';
import { registerPropCommands } from './commands/props';

export function activate(context: vscode.ExtensionContext) {
  registerPropCommands(context);
}

export function deactivate() {}