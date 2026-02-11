"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShortText = generateShortText;
function generateShortText(isRequired) {
    return `shortText: Property.ShortText({
  displayName: 'Name',
  description: 'Enter your name',
  required: ${isRequired},
  defaultValue: 'John Doe',
}),`;
}
//# sourceMappingURL=ap-templates.js.map