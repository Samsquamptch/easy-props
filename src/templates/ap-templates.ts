export function generateShortText(isRequired: boolean) {
  return `shortText: Property.ShortText({
  displayName: 'Name',
  description: 'Enter your name',
  required: ${isRequired},
  defaultValue: 'John Doe',
}),`;
}
