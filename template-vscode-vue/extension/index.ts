import type { ExtensionContext } from 'vscode';
import { commands } from 'vscode';
import { MainPanel } from './views/panel';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('hello-world.showHelloWorld', async () => {
      MainPanel.render(context.extensionUri);
    }),
  );
}

export function deactivate() {}
