const js = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const tseslintPlugin = require('@typescript-eslint/eslint-plugin');
const importX = require('eslint-plugin-import-x');
const jest = require('eslint-plugin-jest');
const eslintComments = require('@eslint-community/eslint-plugin-eslint-comments');
const prettier = require('eslint-config-prettier/flat');
const globals = require('globals');

const tsParser = require('@typescript-eslint/parser');
const tsRules = {
    // This rule is overwhelming and hides other more important typescript issues.
    // Is usually trigger when you are returning something that resolves to `any` due
    // to other typescript errors. In strict mode, typescript already shows the root causes
    // of this issues and that is better than a vague report.
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
};

// eslint-comments plugin rules (plugin doesn't have flat config yet)
const eslintCommentsRules = {
    '@eslint-community/eslint-comments/disable-enable-pair': 'error',
    '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
    '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
    '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
    '@eslint-community/eslint-comments/no-unused-enable': 'error',
};

/**
 * Shareable ESLint flat config for TypeScript projects.
 *
 * This config provides:
 * - TypeScript-specific linting rules
 * - Import/export validation (using eslint-plugin-import-x)
 * - Jest testing support
 * - Prettier integration for code formatting
 * - ESLint directive comment best practices
 *
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
    // Base ESLint recommended rules
    js.configs.recommended,

    // TypeScript files configuration - consolidated
    ...defineConfig({
        files: ['**/*.ts', '**/*.tsx'],
        extends: [
            tseslint.configs.recommended,
            tseslint.configs.recommendedTypeChecked,
            importX.flatConfigs.recommended,
            importX.flatConfigs.typescript,
        ],
        plugins: {
            '@typescript-eslint': tseslintPlugin,
            '@eslint-community/eslint-comments': eslintComments,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: process.cwd(),
            },
            globals: {
                // ES6/ES2015 globals (replaces env: { es6: true })
                ...globals.es2015,
            },
        },
        rules: {
            ...tsRules,
            ...eslintCommentsRules,
        },
    }),

    // TypeScript test files configuration (*.test.ts, *.spec.ts)
    {
        files: ['**/*.test.ts', '**/*.spec.ts', '**/*.test.tsx', '**/*.spec.tsx'],
        ...jest.configs['flat/recommended'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },

    // JavaScript/CommonJS files configuration - consolidated
    {
        files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
        ...tseslint.configs.disableTypeChecked,
        ...importX.flatConfigs.recommended,
        plugins: {
            '@eslint-community/eslint-comments': eslintComments,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.es2015,
            },
        },
        rules: {
            // Allow require() in JavaScript/CommonJS files
            '@typescript-eslint/no-require-imports': 'off',
            ...eslintCommentsRules,
        },
    },

    // Prettier must be last to override any formatting rules
    prettier,
];
