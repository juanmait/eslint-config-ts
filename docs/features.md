# Features

## TypeScript Project Service

This config uses `projectService: true` in the TypeScript parser options, which is a modern approach to configuring typed linting with typescript-eslint.

### What is Project Service?

`projectService` is a feature introduced in typescript-eslint v8 that automatically discovers and uses your TypeScript configuration files (`tsconfig.json`) without requiring explicit configuration. It leverages TypeScript's built-in project service to understand your project structure.

### Configuration in index.js

```javascript
languageOptions: {
    parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
    },
}
```

### Benefits

1. **Automatic Discovery**: No need to manually specify which `tsconfig.json` files to use
2. **Performance**: Better performance compared to the older `project` option
3. **Simplicity**: Reduces configuration complexity for consumers
4. **Accuracy**: Uses the same project resolution logic as TypeScript itself

### How It Works

When `projectService: true` is set:

1. The parser looks for `tsconfig.json` files starting from `tsconfigRootDir` (defaults to `process.cwd()`)
2. TypeScript's project service automatically determines which config applies to each file
3. Type information is made available to type-aware ESLint rules
4. The service watches for changes and updates as needed

### Migration from `project` Option

**Old approach (typescript-eslint v7 and earlier):**

```javascript
parserOptions: {
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
}
```

**New approach (typescript-eslint v8+):**

```javascript
parserOptions: {
    projectService: true,
    tsconfigRootDir: process.cwd(),
}
```

### Type-Checked Rules

With `projectService` enabled, this config enables type-checked rules from typescript-eslint's `recommendedTypeChecked` preset, including:

- `@typescript-eslint/await-thenable` - Ensures awaiting promises only
- `@typescript-eslint/no-floating-promises` - Requires proper promise handling
- `@typescript-eslint/no-misused-promises` - Prevents incorrect promise usage
- `@typescript-eslint/no-unnecessary-condition` - Detects always-true/false conditions
- And many more...

### Important Considerations

#### 1. Project Structure

The project service works best when:
- You have a `tsconfig.json` at the root of your project
- All TypeScript files are included in at least one `tsconfig.json`
- Your `tsconfig.json` files use proper `include`/`exclude` patterns

#### 2. Monorepo Support

For monorepos with multiple `tsconfig.json` files:

```
project-root/
├── tsconfig.json              # Root config
├── packages/
│   ├── package-a/
│   │   └── tsconfig.json      # Automatically discovered
│   └── package-b/
│       └── tsconfig.json      # Automatically discovered
└── eslint.config.js
```

The project service will automatically discover and use all `tsconfig.json` files.

#### 3. Performance Optimization

For large projects, you may want to create a separate `tsconfig.eslint.json`:

```json
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
        "noEmit": true
    },
    "include": [
        "src/**/*.ts",
        "src/**/*.tsx"
    ],
    "exclude": [
        "node_modules",
        "dist",
        "**/*.test.ts"
    ]
}
```

The project service will prefer `tsconfig.eslint.json` over `tsconfig.json` if it exists.

#### 4. Files Outside TypeScript Projects

JavaScript files (`.js`, `.cjs`, `.mjs`) are automatically excluded from type-checking. The config explicitly disables type-checked rules for these files:

```javascript
{
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
}
```

### Troubleshooting

#### Error: "Parsing error: Cannot read file 'tsconfig.json'"

**Solution**: Ensure you have a valid `tsconfig.json` in your project root:

```json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}
```

#### Error: "You have used a rule which requires type information..."

This means a TypeScript file is not included in any `tsconfig.json`. Solutions:

1. Add the file to your `tsconfig.json` `include` array
2. Remove overly restrictive patterns from `exclude`
3. Create a `tsconfig.eslint.json` that includes all lintable files

#### Slow Linting Performance

If linting is slow:

1. Create a `tsconfig.eslint.json` with only necessary files
2. Exclude test files and build artifacts
3. Consider using `TIMING=1 eslint .` to identify slow rules
4. For very large projects, consider disabling some type-checked rules

### Further Reading

- [typescript-eslint: Typed Linting](https://typescript-eslint.io/getting-started/typed-linting)
- [typescript-eslint: What About Linting with Type Information?](https://typescript-eslint.io/linting/typed-linting)
- [typescript-eslint v8 Release Notes](https://typescript-eslint.io/blog/announcing-typescript-eslint-v8)

### Related Configuration

See also:
- [Migration Guide](../CHANGELOG.md#migration-guide-for-consumers) for upgrading from v1.x
- [TypeScript ESLint Rules](https://typescript-eslint.io/rules/) for all available type-aware rules
