# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## [2.0.0] - 2026-01-22

### Changed

**BREAKING CHANGES - Migration to ESLint 9 and Flat Config**

-   **Migrated to ESLint 9** with flat config format (`eslint.config.js`)
    -   Requires ESLint `>=9.0.0 < 10`
    -   Configuration now uses flat config format (array of config objects)
    -   Removed support for legacy `.eslintrc.*` format
    -   `.eslintignore` files no longer supported; use `ignores` property in config
    -   Requires Node.js `>=18.18.0`

-   **Replaced `eslint-plugin-import` with `eslint-plugin-import-x`**
    -   Better ESLint 9 and flat config support
    -   Drop-in replacement with same rules
    -   Full TypeScript support with flat config

-   **Updated TypeScript configuration**
    -   Now uses `typescript-eslint` package (combines parser and plugin)
    -   Updated to use `projectService` instead of `project` for better performance
    -   TypeScript rules properly scoped to `**/*.ts` and `**/*.tsx` files only
    -   JavaScript files explicitly exclude type-checked rules

-   **Simplified lint script**
    -   Removed `--ext` flag from lint command (no longer needed with flat config)
    -   Changed from: `"eslint . --ext .js,.jsx,.ts,.tsx"`
    -   Changed to: `"eslint ."`

-   **Updated dependencies**
    ```
    @eslint/js                                             NEW   →  ^9.0.0
    @types/eslint                                        ^8.56.12  →  ^9.0.0
    @typescript-eslint/eslint-plugin                      ^8.5.0  →  ^8.0.0
    @typescript-eslint/parser                             ^8.5.0  →  ^8.0.0
    eslint                                               ^8.57.0  →  ^9.0.0
    eslint-plugin-import                                  ^2.30.0  →  REMOVED
    eslint-plugin-import-x                                  NEW   →  ^4.0.0
    eslint-plugin-jest                                    ^28.8.3  →  ^28.0.0
    globals                                                 NEW   →  ^17.0.0
    typescript-eslint                                       NEW   →  ^8.0.0
    ```

-   **Updated peer dependencies**
    ```
    @eslint/js                                              NEW   →  >=9.0.0 < 10
    @types/eslint                                      >=8.4.1 < 9  →  >=9.0.0 < 10
    @typescript-eslint/eslint-plugin                  >=6.19.0 < 9  →  >=8.0.0 < 9
    @typescript-eslint/parser                         >=6.19.0 < 9  →  >=8.0.0 < 9
    eslint                                             >=8.6.0 < 9  →  >=9.0.0 < 10
    eslint-plugin-import                              >=2.25.4 < 3  →  REMOVED
    eslint-plugin-import-x                                  NEW   →  >=4.0.0 < 5
    eslint-plugin-jest                                >=27.6.3 < 29  →  >=28.0.0 < 29
    typescript-eslint                                       NEW   →  ^8.53.1
    ```

### Migration Guide for Consumers

Users of this config will need to:

1. **Update ESLint and related packages** to version 9:
   ```bash
   npm install --save-dev \
     eslint@^9.0.0 \
     @eslint/js@^9.0.0 \
     @types/eslint@^9.0.0 \
     @typescript-eslint/eslint-plugin@^8.0.0 \
     @typescript-eslint/parser@^8.0.0 \
     typescript-eslint@^8.0.0 \
     eslint-plugin-import-x@^4.0.0 \
     eslint-plugin-jest@^28.0.0 \
     globals@^17.0.0 \
     eslint-config-prettier@^9.1.0
   ```

   And remove the old `eslint-plugin-import`:
   ```bash
   npm uninstall eslint-plugin-import
   ```

2. **Convert `.eslintrc.{js,cjs,json}` to `eslint.config.js`**:
   ```javascript
   // Old: .eslintrc.cjs
   module.exports = {
       root: true,
       extends: '@cubostuff/eslint-config-ts',
       parserOptions: {
           project: ['./tsconfig.json'],
           tsconfigRootDir: __dirname,
       },
   };

   // New: eslint.config.js
   const baseConfig = require('@cubostuff/eslint-config-ts');

   module.exports = [
       ...baseConfig,
       // Your custom overrides here
   ];
   ```

3. **Migrate `.eslintignore` patterns** into `eslint.config.js`:
   ```javascript
   module.exports = [
       {
           ignores: ['dist/**', 'build/**', 'node_modules/**'],
       },
       ...baseConfig,
   ];
   ```

4. **Update package.json scripts** (remove `--ext` flag):
   ```json
   {
       "scripts": {
-          "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
+          "lint": "eslint ."
       }
   }
   ```

   ESLint 9 flat config automatically detects file types based on the `files` patterns in your configuration, so the `--ext` flag is no longer needed.

## [1.2.0] - 2024-09-13

### Changed

-   upgrade dependencies
    ```
    @eslint-community/eslint-plugin-eslint-comments   ^4.1.0  →   ^4.4.0
    @types/eslint                                    ^8.56.2  →   ^8.56.12
    @typescript-eslint/eslint-plugin                 ^6.19.0  →   ^8.5.0
    @typescript-eslint/parser                        ^6.19.0  →   ^8.5.0
    eslint                                           ^8.56.0  →  ^8.57.0
    eslint-plugin-import                             ^2.29.1  →  ^2.30.0
    eslint-plugin-jest                               ^27.6.3  →  ^28.8.3
    prettier                                          ^3.2.4  →   ^3.3.3
    typescript                                        ^5.3.3  →   ^5.6.2
    ```

## [1.0.0-beta.3] - 2023-01-17

-   Fix wrong peer dependencies versions

## [1.0.0-beta.2] - 2023-01-17

-   replacement of `eslint-plugin-eslint-comments` by
    `@eslint-community/eslint-plugin-eslint-comments`. See
    https://eslint.org/blog/2023/03/announcing-eslint-community-org/
-   upgrade dependencies
    ```
    @types/eslint                      ^8.4.5  →  ^8.56.2
    @typescript-eslint/eslint-plugin  ^5.30.6  →  ^6.19.0
    @typescript-eslint/parser         ^5.30.6  →  ^6.19.0
    eslint                            ^8.19.0  →  ^8.56.0
    eslint-config-prettier             ^8.5.0  →   ^9.1.0
    eslint-plugin-import              ^2.26.0  →  ^2.29.1
    eslint-plugin-jest                ^26.6.0  →  ^27.6.3
    prettier                           ^2.7.1  →   ^3.2.4
    typescript                         ^4.7.4  →   ^5.3.3
    ```
-   fix formatting in CHANGELOG

## [0.1.0] - 2022-07-15

-   add jest support via [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)

## [0.0.5] - 2022-07-13

### Fixed

-   turn off rule `@typescript-eslint/no-unsafe-return` (see comments n the source code)

## [0.0.4] - 2022-07-12

### Added

-   upgrade dependencies
    ```
    @types/eslint                      ^8.4.2  →   ^8.4.5
    @typescript-eslint/eslint-plugin  ^5.23.0  →  ^5.30.6
    @typescript-eslint/parser         ^5.23.0  →  ^5.30.6
    eslint                            ^8.15.0  →  ^8.19.0
    prettier                           ^2.6.2  →   ^2.7.1
    typescript                         ^4.6.4  →   ^4.7.4
    ```

## 0.0.3

-   add repository and homepage to package.json
-   remove "browser" from the main "env" field

## 0.0.1

-   upgrade dependencies
    ```
    @types/eslint                      ^8.4.1  →   ^8.4.2
    @typescript-eslint/eslint-plugin  ^5.11.0  →  ^5.23.0
    @typescript-eslint/parser         ^5.11.0  →  ^5.23.0
    eslint                             ^8.8.0  →  ^8.15.0
    eslint-config-prettier             ^8.3.0  →   ^8.5.0
    eslint-plugin-import              ^2.25.4  →  ^2.26.0
    prettier                           ^2.5.1  →   ^2.6.2
    typescript                         ^4.5.5  →   ^4.6.4
    ```
-   copy source from `eslint-config-monosvelte`
