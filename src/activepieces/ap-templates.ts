import { returnAuthName } from "../utils/auth-name";
import { callListBuilder } from "../utils/list-builder";

export function generateShortText(isRequired: boolean) {
  return `
  shortText: Property.ShortText({
    displayName: 'Text',
    description: '',
    required: ${isRequired},
    defaultValue: '',
  }),`;
}

export function generateLongText(isRequired: boolean): string {
  return `
  longText: Property.LongText({
    displayName: 'Text',
    description: '',
    required: ${isRequired},
    defaultValue: ''
  }),`;
}

export function generateCheckbox(isRequired: boolean): string {
  return `
  checkBox: Property.Checkbox({
    displayName: 'Checkbox',
    description: '',
    required: ${isRequired},
    defaultValue: false,
  }),`;
}

export function generateMarkdown(isRequired: boolean): string {
  return `
  markDown: Property.MarkDown({
    value: '## Markdown',
    variant: MarkdownVariant.INFO,
  }),`;
}

export function generateDateTime(isRequired: boolean): string {
  return `
  dateTime: Property.DateTime({
    displayName: 'DateTime',
    description: '',
    required: ${isRequired},
    defaultValue: '2000-01-01T00:00:00Z',
  }),`;
}

export function generateNumber(isRequired: boolean): string {
  return `
  number: Property.Number({
    displayName: 'Number',
    description: '',
    required: ${isRequired},
  }),`;
}

export function generateStaticDropdown(isRequired: boolean): string {
  const listOptions = callListBuilder();

  return `
  staticDropdown: Property.StaticDropdown({
    displayName: 'Dropdown',
    description: '',
    required: ${isRequired},
    options: {
      options: [
        ${listOptions}
      ],
    },
  }),`;
}

export function generateStaticMultiSelectDropdown(isRequired: boolean): string {
  const listOptions = callListBuilder();

  return `
  staticMultiDropdown: Property.StaticMultiSelectDropdown({
    displayName: 'Dropdown',
    description: '',
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
    description: '',
    required: ${isRequired},
    defaultValue: { key: 'value' },
  }),`;
}

export function generateDictionary(isRequired: boolean): string {
  return `
  dictionary: Property.Object({
    displayName: 'Dictionary',
    description: '',
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
    description: '',
    required: ${isRequired},
  }),`;
}

export function generateArray(isRequired: boolean): string {
  return `
  array: Property.Array({
    displayName: 'Array',
    description: '',
    required: ${isRequired},
    defaultValue: ['tag1', 'tag2'],
  }),`;
}

export function generateDropdown(isRequired: boolean): string {
  const authName = returnAuthName()

  const listOptions = callListBuilder();

  return `
  dropdown: Property.Dropdown({
    displayName: 'Dropdown',
    description: '',
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

  const listOptions = callListBuilder();

  return `
  multiDropdown: Property.MultiSelectDropdown({
    displayName: 'Dropdown',
    description: '',
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
    description: 'Dynamic',
    displayName: '',
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
