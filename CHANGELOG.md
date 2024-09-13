# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## [1.2.0] - 2024-08-13

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
