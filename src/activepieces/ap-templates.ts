import { returnAuthName } from "../utils/auth-name";
import { listBuilder } from "../utils/list-builder";

export function generateShortText(isRequired: boolean) {
  return `
  shortText: Property.ShortText({
  displayName: 'Name',
  description: 'Enter your name',
  required: ${isRequired},
  defaultValue: 'John Doe',
}),`;
}

export function generateLongText(isRequired: boolean): string {
  return `
  longText: Property.LongText({
  displayName: 'Description',
  description: 'Enter a description',
  required: ${isRequired},
}),`;
}

export function generateCheckbox(isRequired: boolean): string {
  return `
  checkBox: Property.Checkbox({
  displayName: 'Agree to Terms',
  description: 'Check this box to agree to the terms',
  required: ${isRequired},
  defaultValue: false,
}),`;
}

export function generateMarkdown(isRequired: boolean): string {
  return `
  markDown: Property.MarkDown({
    value: '## This is a markdown snippet',
    variant: MarkdownVariant.WARNING,
}),`;
}

export function generateDateTime(isRequired: boolean): string {
  return `
  dateTime: Property.DateTime({
  displayName: 'Date and Time',
  description: 'Select a date and time',
  required: ${isRequired},
  defaultValue: '2023-06-09T12:00:00Z',
}),`;
}

export function generateNumber(isRequired: boolean): string {
  return `
  number: Property.Number({
  displayName: 'Quantity',
  description: 'Enter a number',
  required: ${isRequired},
}),`;
}

export function generateStaticDropdown(isRequired: boolean): string {
  const listOptions = listBuilder();

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

export function generateStaticMultiSelectDropdown(isRequired: boolean): string {
  const listOptions = listBuilder();

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

export function generateJson(isRequired: boolean): string {
  return `
  json: Property.Json({
  displayName: 'Data',
  description: 'Enter JSON data',
  required: ${isRequired},
  defaultValue: { key: 'value' },
}),`;
}

export function generateDictionary(isRequired: boolean): string {
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

export function generateFile(isRequired: boolean): string {
  return `
  file: Property.File({
  displayName: 'File',
  description: 'Upload a file',
  required: ${isRequired},
}),`;
}

export function generateArray(isRequired: boolean): string {
  return `
  array: Property.Array({
  displayName: 'Tags',
  description: 'Enter tags',
  required: ${isRequired},
  defaultValue: ['tag1', 'tag2'],
}),`;
}

export function generateDropdown(isRequired: boolean): string {
  const authName = returnAuthName()

  const listOptions = listBuilder();

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

export function generateMultiSelectDropdown(isRequired: boolean): string {
  const authName = returnAuthName()

  const listOptions = listBuilder();

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

export function generateDynamicProperties(isRequired: boolean): string {
  const authName = returnAuthName()

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

export function generateCustom(isRequired: boolean): string {
  return `
  Property.Custom({
    code:(
    //Add code here
    ),
    displayName: 'Custom Property',
    required: ${isRequired}
    })`;
}
