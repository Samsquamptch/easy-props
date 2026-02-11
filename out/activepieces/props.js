"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPropCommands = registerPropCommands;
const vscode = __importStar(require("vscode"));
const ap_templates_1 = require("../templates/ap-templates");
const ap_enum_1 = require("../enums/ap-enum");
function registerPropCommands(context) {
    context.subscriptions.push(vscode.commands.registerCommand("easyprops.addProp", addProp));
}
async function addProp() {
    const workflowProvider = vscode.workspace
        .getConfiguration("easyprops")
        .get("workflowProvider");
    switch (workflowProvider) {
        case "ActivePieces":
            activePiecesProp();
            break;
    }
}
async function activePiecesProp() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    const propType = await vscode.window.showQuickPick(Object.values(ap_enum_1.ActivepiecesPropertyType), { placeHolder: "Select a property type" });
    const isRequired = vscode.workspace
        .getConfiguration("easyprops")
        .get("getRequired", true);
    var output = "";
    switch (propType) {
        case ap_enum_1.ActivepiecesPropertyType.SHORT_TEXT:
            output = (0, ap_templates_1.generateShortText)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.LONG_TEXT:
            output = (0, ap_templates_1.generateLongText)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.CHECKBOX:
            output = (0, ap_templates_1.generateCheckbox)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.MARKDOWN:
            output = (0, ap_templates_1.generateMarkdown)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.DATE_TIME:
            output = (0, ap_templates_1.generateDateTime)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.NUMBER:
            output = (0, ap_templates_1.generateNumber)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.STATIC_DROPDOWN:
            output = (0, ap_templates_1.generateStaticDropdown)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.STATIC_MULTISELECT_DROPDOWN:
            output = (0, ap_templates_1.generateStaticMultiSelectDropdown)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.JSON:
            output = (0, ap_templates_1.generateJson)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.OBJECT:
            output = (0, ap_templates_1.generateObject)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.FILE:
            output = (0, ap_templates_1.generateFile)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.ARRAY_STRINGS:
            output = (0, ap_templates_1.generateArray)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.DROPDOWN:
            output = (0, ap_templates_1.generateDropdown)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.MULTISELECT_DROPDOWN:
            output = (0, ap_templates_1.generateMultiSelectDropdown)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.DYNAMIC_PROPERTIES:
            output = (0, ap_templates_1.generateDynamicProperties)(isRequired);
            break;
        case ap_enum_1.ActivepiecesPropertyType.CUSTOM:
            output = (0, ap_templates_1.generateCustom)(isRequired);
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
//# sourceMappingURL=props.js.map