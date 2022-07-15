/**
 * @type {import('eslint').Linter.BaseConfig['extends']}
 */
const tsConfigExtends = [
    /**
     * ESLint's builtin "recommended" config - it turns on a small, sensible set of rules which
     * lint for well-known best-practices.
     */
    'eslint:recommended',
    /**
     * This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and
     * prevent issues with misspelling of file paths and import names.
     * For typescript it relies on `eslint-import-resolver-typescript` bellow.
     *
     * Check [here](https://www.npmjs.com/package/eslint-plugin-import#settings) for
     * more settings to resolve problems with resolving imports.
     */
    'plugin:import/recommended',
    /**
     * This plugin adds TypeScript support to eslint-plugin-import.
     *
     * - import/require files with extension .ts/.tsx!
     * - Use paths defined in tsconfig.json.
     * - Prefer resolve @types/* definitions over plain .js.
     * - Multiple tsconfigs support just like normal.
     *
     * See extra configs [here](https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration)
     */
    'plugin:import/typescript',
    /**
     * is our "recommended" config - it's just like eslint:recommended, except it only turns on
     * rules from our TypeScript-specific plugin.
     */
    'plugin:@typescript-eslint/recommended',
    /**
     * Check [Linting with Type Information](https://typescript-eslint.io/docs/linting/type-linting/).
     * Contains rules that specifically require type information.
     */
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    /**
     * Apply best practices on directive comments such as `// eslint-disable`
     * - to disallow unused disabling.
     * - to disallow non-effect enabling.
     * - to require rule IDs for disabling and enabling.
     */
    'plugin:eslint-comments/recommended',
    /**
     * eslint-config-prettier ensure ESLint doesn't report on formatting issues that prettier will fix.
     * - check [here](https://typescript-eslint.io/docs/linting/linting#prettier)
     * - check [here](https://prettier.io/docs/en/install.html#eslint-and-other-linters)
     * - check [here](https://prettier.io/docs/en/integrating-with-linters.html)
     */
    'prettier',
];

const tsRules = {
    // This rule is overwhelming and hides other more important typescript issues.
    // Is usually trigger when you are returning something that resolves to `any` due
    // to other typescript errors. In strict mode, typescript already shows the root causes
    // of this issues and that is better than a vague report.
    '@typescript-eslint/no-unsafe-return': 'off',
};

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    env: {
        es6: true,
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            parserOptions: {
                ecmaVersion: 2019,
                sourceType: 'module',
            },
            extends: tsConfigExtends,
            rules: tsRules,
        },
        {
            files: ['*.test.ts'],
            env: {
                node: true,
                browser: false,
                es6: true,
                'jest/globals': true,
            },
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'jest'],
            parserOptions: {
                ecmaVersion: 2019,
                sourceType: 'module',
            },
            extends: tsConfigExtends.concat(['plugin:jest/recommended']),
            rules: tsRules,
        },
        {
            files: ['*.cjs', '*.js'],
            env: {
                node: true,
                browser: false,
                es6: true,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            extends: [
                'eslint:recommended',
                'plugin:import/recommended',
                'plugin:eslint-comments/recommended',
                'prettier',
            ],
        },
    ],
};
