export function generateShortText(isRequired: boolean) {
  return `shortText: Property.ShortText({
  displayName: 'Name',
  description: 'Enter your name',
  required: ${isRequired},
  defaultValue: 'John Doe',
}),`;
}

export function generateLongText(isRequired: boolean): string {
  return `// LongText (required: ${isRequired})`;
}

export function generateCheckbox(isRequired: boolean): string {
  return `// Checkbox (required: ${isRequired})`;
}

export function generateMarkdown(isRequired: boolean): string {
  return `// Markdown (required: ${isRequired})`;
}

export function generateDateTime(isRequired: boolean): string {
  return `// DateTime (required: ${isRequired})`;
}

export function generateNumber(isRequired: boolean): string {
  return `// Number (required: ${isRequired})`;
}

export function generateStaticDropdown(isRequired: boolean): string {
  return `// StaticDropdown (required: ${isRequired})`;
}

export function generateStaticMultiSelectDropdown(isRequired: boolean): string {
  return `// StaticMultiSelectDropdown (required: ${isRequired})`;
}

export function generateJson(isRequired: boolean): string {
  return `// Json (required: ${isRequired})`;
}

export function generateObject(isRequired: boolean): string {
  return `// Object (required: ${isRequired})`;
}

export function generateFile(isRequired: boolean): string {
  return `// File (required: ${isRequired})`;
}

export function generateArray(isRequired: boolean): string {
  return `// Array (required: ${isRequired})`;
}

export function generateDropdown(isRequired: boolean): string {
  return `// Dropdown (required: ${isRequired})`;
}

export function generateMultiSelectDropdown(isRequired: boolean): string {
  return `// MultiSelectDropdown (required: ${isRequired})`;
}

export function generateDynamicProperties(isRequired: boolean): string {
  return `// DynamicProperties (required: ${isRequired})`;
}

export function generateCustom(isRequired: boolean): string {
  return `// Custom (required: ${isRequired})`;
}
