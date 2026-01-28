const baseConfig = require('./index.js');
const globals = require('globals');

/**
 * ESLint flat config for linting this project itself.
 *
 * This extends the shareable config from index.js (just like the old .eslintrc.cjs did with extends: '.')
 * and adds Node.js globals since this project runs in Node.js.
 *
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
    // Global ignores (replaces .eslintignore)
    {
        ignores: ['node_modules/**', 'dist/**', 'build/**', '.git/**'],
    },

    // Extend from the shareable config (equivalent to extends: '.')
    ...baseConfig,

    // Add Node.js globals for this project (equivalent to env: { node: true })
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];
