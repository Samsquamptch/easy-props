import * as vscode from "vscode";
import {
  generateShortText,
  generateLongText,
  generateCheckbox,
  generateMarkdown,
  generateDateTime,
  generateNumber,
  generateStaticDropdown,
  generateStaticMultiSelectDropdown,
  generateJson,
  generateDictionary,
  generateFile,
  generateArray,
  generateDropdown,
  generateMultiSelectDropdown,
  generateDynamicProperties,
  generateCustom,
} from "../activepieces/ap-templates";

import { ActivepiecesPropertyType } from "../activepieces/ap-enum";

export async function activePiecesProp() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const propType = await vscode.window.showQuickPick(
    Object.values(ActivepiecesPropertyType),
    { placeHolder: "Select a property type" },
  );

  const isRequired = vscode.workspace
    .getConfiguration("easyprops")
    .get<boolean>("propRequired", true);

  var output = "";

  switch (propType) {
    case ActivepiecesPropertyType.SHORT_TEXT:
      output = generateShortText(isRequired);
      break;

    case ActivepiecesPropertyType.LONG_TEXT:
      output = generateLongText(isRequired);
      break;

    case ActivepiecesPropertyType.CHECKBOX:
      output = generateCheckbox(isRequired);
      break;

    case ActivepiecesPropertyType.MARKDOWN:
      output = generateMarkdown(isRequired);
      break;

    case ActivepiecesPropertyType.DATE_TIME:
      output = generateDateTime(isRequired);
      break;

    case ActivepiecesPropertyType.NUMBER:
      output = generateNumber(isRequired);
      break;

    case ActivepiecesPropertyType.STATIC_DROPDOWN:
      output = generateStaticDropdown(isRequired);
      break;

    case ActivepiecesPropertyType.STATIC_MULTISELECT_DROPDOWN:
      output = generateStaticMultiSelectDropdown(isRequired);
      break;

    case ActivepiecesPropertyType.JSON:
      output = generateJson(isRequired);
      break;

    case ActivepiecesPropertyType.DICTIONARY:
      output = generateDictionary(isRequired);
      break;

    case ActivepiecesPropertyType.FILE:
      output = generateFile(isRequired);
      break;

    case ActivepiecesPropertyType.ARRAY_STRINGS:
      output = generateArray(isRequired);
      break;

    case ActivepiecesPropertyType.DROPDOWN:
      output = generateDropdown(isRequired);
      break;

    case ActivepiecesPropertyType.MULTISELECT_DROPDOWN:
      output = generateMultiSelectDropdown(isRequired);
      break;

    case ActivepiecesPropertyType.DYNAMIC_PROPERTIES:
      output = generateDynamicProperties(isRequired);
      break;

    case ActivepiecesPropertyType.CUSTOM:
      output = generateCustom(isRequired);
      break;

    default: {
      output = "";
    }
  }

  editor.edit((editBuilder) => {
    const position = editor.selection.active;
    editBuilder.insert(position, output);
  });
}