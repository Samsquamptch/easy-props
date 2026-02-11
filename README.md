# Easy Props

VS Code extension for quickly scaffolding Activepieces props with full type support and configurable settings. It allows developers to insert properly structured prop definitions directly from the Command Palette, covering all property types including ShortText, LongText, Checkbox, Markdown, DateTime, Number, Dropdowns, JSON, Objects, Files, Arrays, DynamicProperties, and Custom. Configurable settings include workflow provider, required fields, auth names, and dropdown options, making it adaptable to different project setups.

The extension is built with a modular command and generator structure for maintainable and scalable code. While it currently focuses on Activepieces, the architecture is designed to support additional workflow platforms in the future, making it easy to extend and maintain across multiple systems.

## Features

- Add props directly from the Command Palette  
- Supports all Activepieces property types
- Configurable settings: workflow provider, required field, auth name, dropdown options length  
- Modular command and generator structure for easy maintenance  
- Utilities for building lists and returning auth names  
- Prepared for multi-workflow expansion (e.g., n8n)  

## Requirements

This extension is intended to be used with specific workflow frameworks. Please ensure you are using this on a relevant project.

## Commands

* **Add Prop** — Insert a scaffolded Activepieces prop of the selected type.
* **Insert List** — Insert a list of `label` / `value` pairs with a chosen length.

## Extension Settings

Accessible in Settings → Extensions → Easy Props:

| Setting                      | Description                          | Default          |
| ---------------------------- | ------------------------------------ | ---------------- |
| `easyprops.workflowProvider` | Workflow system for prop types       | `"ActivePieces"` |
| `easyprops.propRequired`     | Whether the prop is required         | `false`          |
| `easyprops.authName`         | Auth name for dynamic lists          | `"easyAuth"`     |
| `easyprops.optionsLength`    | Number of elements in dropdown menus | `1`              |


## Known Issues

Currently only configured for Active Pieces.

## Release Notes

The latest version is 1.0.0.

### 1.0.0

Initial release of Easy Props. Configured for Active Pieces only.
