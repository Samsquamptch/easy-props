"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const props_1 = require("./commands/props");
function activate(context) {
    (0, props_1.registerPropCommands)(context);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map