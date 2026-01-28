# eslint-config-ts

A shareable ESLint configuration for TypeScript projects using ESLint 9 with flat config format.

## Features

- 🚀 **ESLint 9** with flat config format
- 📘 **TypeScript** support with type-aware linting
- 🎨 **Prettier** integration
- 🧪 **Jest** testing support
- 📦 **Import validation** with eslint-plugin-import-x
- ⚡ **Automatic tsconfig discovery** using `projectService: true`

## Requirements

- Node.js >=18.18.0
- ESLint >=9.0.0
- TypeScript >=5.3.3

## Installation

Install the config:

```bash
npm install --save-dev @cubostuff/eslint-config-ts
```

Install peer dependencies:

```bash
npm install --save-dev \
  eslint@^9.0.0 \
  @eslint/js@^9.0.0 \
  @types/eslint@^9.0.0 \
  @typescript-eslint/eslint-plugin@^8.0.0 \
  @typescript-eslint/parser@^8.0.0 \
  typescript-eslint@^8.0.0 \
  eslint-import-resolver-typescript@^4.0.0 \
  eslint-plugin-import-x@^4.0.0 \
  eslint-plugin-jest@^28.0.0 \
  eslint-config-prettier@^9.1.0 \
  @eslint-community/eslint-plugin-eslint-comments@^4.4.0 \
  globals@^17.0.0 \
  prettier@^3.0.0 \
  typescript@^5.0.0
```

## Usage

Create `eslint.config.js` in your project root:

```js
const baseConfig = require('@cubostuff/eslint-config-ts');

/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
    // Add ignore patterns first
    {
        ignores: ['dist/**', 'build/**', 'node_modules/**'],
    },

    // Extend the base config
    ...baseConfig,

    // Add your custom rules here (optional)
    {
        rules: {
            // Your custom rule overrides
        },
    },
];
```

### TypeScript Configuration

The config uses `projectService: true` which automatically discovers your `tsconfig.json` files. No
manual configuration needed!

For more details about this feature and optimization tips, see [docs/features.md](docs/features.md).

## Migrating from v1.x

If you're upgrading from v1.x (ESLint 8), see the
[Migration Guide](CHANGELOG.md#migration-guide-for-consumers) in the CHANGELOG.

## What's Included

This config provides:

- **Base ESLint rules** - `eslint:recommended`
- **TypeScript rules** - `recommended` and `recommendedTypeChecked` from typescript-eslint
- **Import validation** - Using eslint-plugin-import-x
- **Jest support** - Rules for test files (`*.test.ts`, `*.spec.ts`)
- **Prettier integration** - Disables conflicting formatting rules
- **ESLint comments** - Best practices for directive comments

## Customization

### Adding Custom Rules

```js
const baseConfig = require('@cubostuff/eslint-config-ts');

module.exports = [
    ...baseConfig,
    {
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'error',
        },
    },
];
```

### Monorepo Setup

In a monorepo, add ignore patterns to prevent inheriting configs from parent directories:

```js
const baseConfig = require('@cubostuff/eslint-config-ts');

module.exports = [
    {
        ignores: ['../**'], // Ignore parent directories
    },
    ...baseConfig,
];
```

## Release

Before releasing:

1. Update [CHANGELOG.md](CHANGELOG.md)
2. Test the configuration locally

```bash
pnpm version [major|minor|patch]
pnpm publish
git push && git push --tags
```

## Release Beta

```bash
pnpm version 2.0.0-beta.1
pnpm publish --tag beta
git push && git push --tags
```

## Peer Dependencies

All peer dependencies must be installed manually:

- `@eslint/js` - ESLint's JavaScript configs
- `@eslint-community/eslint-plugin-eslint-comments` - Best practices for ESLint directives
- `@types/eslint` - TypeScript definitions for ESLint
- `@typescript-eslint/eslint-plugin` - TypeScript ESLint plugin
- `@typescript-eslint/parser` - TypeScript parser for ESLint
- `eslint` - Core linting engine (>=9.0.0)
- `eslint-config-prettier` - Disables conflicting formatting rules
- `eslint-import-resolver-typescript` - TypeScript import resolver (required for import-x plugin)
- `eslint-plugin-import-x` - Import/export validation
- `eslint-plugin-jest` - Jest testing rules
- `globals` - Environment-specific globals
- `prettier` - Code formatter
- `typescript` - TypeScript compiler
- `typescript-eslint` - Combined TypeScript ESLint package

## Documentation

- [Features Documentation](docs/features.md) - Details about `projectService` and type-aware linting
- [Changelog](CHANGELOG.md) - Version history and migration guides

## Upstream Changelogs

Stay updated with breaking changes from upstream dependencies:

- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/main/CHANGELOG.md)
- [ESLint](https://github.com/eslint/eslint/blob/main/CHANGELOG.md)
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x/releases)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest/releases)

## License

ISC
