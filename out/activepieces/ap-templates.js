"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShortText = generateShortText;
exports.generateLongText = generateLongText;
exports.generateCheckbox = generateCheckbox;
exports.generateMarkdown = generateMarkdown;
exports.generateDateTime = generateDateTime;
exports.generateNumber = generateNumber;
exports.generateStaticDropdown = generateStaticDropdown;
exports.generateStaticMultiSelectDropdown = generateStaticMultiSelectDropdown;
exports.generateJson = generateJson;
exports.generateDictionary = generateDictionary;
exports.generateFile = generateFile;
exports.generateArray = generateArray;
exports.generateDropdown = generateDropdown;
exports.generateMultiSelectDropdown = generateMultiSelectDropdown;
exports.generateDynamicProperties = generateDynamicProperties;
exports.generateCustom = generateCustom;
const auth_name_1 = require("../utils/auth-name");
const list_builder_1 = require("../utils/list-builder");
function generateShortText(isRequired) {
    return `
  shortText: Property.ShortText({
  displayName: 'Name',
  description: 'Enter your name',
  required: ${isRequired},
  defaultValue: 'John Doe',
}),`;
}
function generateLongText(isRequired) {
    return `
  longText: Property.LongText({
  displayName: 'Description',
  description: 'Enter a description',
  required: ${isRequired},
}),`;
}
function generateCheckbox(isRequired) {
    return `
  checkBox: Property.Checkbox({
  displayName: 'Agree to Terms',
  description: 'Check this box to agree to the terms',
  required: ${isRequired},
  defaultValue: false,
}),`;
}
function generateMarkdown(isRequired) {
    return `
  markDown: Property.MarkDown({
    value: '## This is a markdown snippet',
    variant: MarkdownVariant.WARNING,
}),`;
}
function generateDateTime(isRequired) {
    return `
  dateTime: Property.DateTime({
  displayName: 'Date and Time',
  description: 'Select a date and time',
  required: ${isRequired},
  defaultValue: '2023-06-09T12:00:00Z',
}),`;
}
function generateNumber(isRequired) {
    return `
  number: Property.Number({
  displayName: 'Quantity',
  description: 'Enter a number',
  required: ${isRequired},
}),`;
}
function generateStaticDropdown(isRequired) {
    const listOptions = (0, list_builder_1.listBuilder)();
    return `
  staticDropdown: Property.StaticDropdown({
  displayName: 'Dropdown',
  description: 'Select an option',
  required: ${isRequired},
  options: {
    options: [
      ${listOptions}
    ],
  },
}),`;
}
function generateStaticMultiSelectDropdown(isRequired) {
    const listOptions = (0, list_builder_1.listBuilder)();
    return `
  staticMultiDropdown: Property.StaticMultiSelectDropdown({
  displayName: 'Dropdown',
  description: 'Select an option',
  required: ${isRequired},
  options: {
    options: [
      ${listOptions}
    ],
  },
}),`;
}
function generateJson(isRequired) {
    return `
  json: Property.Json({
  displayName: 'Data',
  description: 'Enter JSON data',
  required: ${isRequired},
  defaultValue: { key: 'value' },
}),`;
}
function generateDictionary(isRequired) {
    return `
  dictionary: Property.Object({
  displayName: 'Options',
  description: 'Enter key-value pairs',
  required: ${isRequired},
  defaultValue: {
    key1: 'value1',
    key2: 'value2',
  },
}),`;
}
function generateFile(isRequired) {
    return `
  file: Property.File({
  displayName: 'File',
  description: 'Upload a file',
  required: ${isRequired},
}),`;
}
function generateArray(isRequired) {
    return `
  array: Property.Array({
  displayName: 'Tags',
  description: 'Enter tags',
  required: ${isRequired},
  defaultValue: ['tag1', 'tag2'],
}),`;
}
function generateDropdown(isRequired) {
    const authName = (0, auth_name_1.returnAuthName)();
    const listOptions = (0, list_builder_1.listBuilder)();
    return `
  dropdown: Property.Dropdown({
  displayName: 'Options',
  description: 'Select an option',
  required: ${isRequired},
  auth: ${authName},
  refreshers: ['auth'],
  refreshOnSearch: false,
  options: async ({ auth }, { searchValue }) => {
    // Search value only works when refreshOnSearch is true
    if (!auth) {
      return {
        disabled: true,
        options: []
      };
    }
    return {
      options: [
        ${listOptions}
      ],
    };
  },
}),`;
}
function generateMultiSelectDropdown(isRequired) {
    const authName = (0, auth_name_1.returnAuthName)();
    const listOptions = (0, list_builder_1.listBuilder)();
    return `
  multiDropdown: Property.MultiSelectDropdown({
  displayName: 'Options',
  description: 'Select an option',
  required: ${isRequired},
  auth: ${authName},
  refreshers: ['auth'],
  refreshOnSearch: false,
  options: async ({ auth }, { searchValue }) => {
    // Search value only works when refreshOnSearch is true
    if (!auth) {
      return {
        disabled: true,
        options: []
      };
    }
    return {
      options: [
        ${listOptions}
      ],
    };
  },
}),`;
}
function generateDynamicProperties(isRequired) {
    const authName = (0, auth_name_1.returnAuthName)();
    return `
  dynamic: Property.DynamicProperties({
  description: 'Dynamic Form',
  displayName: 'Dynamic Form',
  required: ${isRequired},
  auth: ${authName},
  refreshers: ['auth'],
  props: async ({auth}) => {
    //logic for the auth can be added here
    // const apiEndpoint = 'https://someapi.com';
    // const response = await httpClient.sendRequest<{ values: [string[]][] }>({
        // method: HttpMethod.GET,
        // url: apiEndpoint ,
        //you can add the auth value to the headers
	  });

    const properties = {
      //Add props here
    };

    return properties;
  },
});`;
}
function generateCustom(isRequired) {
    return `
  Property.Custom({
    code:(
    //Add code here
    ),
    displayName: 'Custom Property',
    required: ${isRequired}
    })`;
}
//# sourceMappingURL=ap-templates.js.map