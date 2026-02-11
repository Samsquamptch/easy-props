import * as vscode from "vscode";

export function callListBuilder() {
    var listLength = vscode.workspace
          .getConfiguration("easyprops")
          .get<number>("optionsLength");

    if (!listLength) {
        listLength = 1
    }
    
    return listBuilder(listLength)
}

export function listBuilder(listLength: number) {   
    var i = 1
    var listText = `{
        label: 'Option 1',
        value: '1',
        },`
    
    for (i; i < listLength; i++) {
        listText = listText + `
        {
        label: 'Option ${i+1}',
        value: '${i+1}',
        },`
    }

    return listText;
}