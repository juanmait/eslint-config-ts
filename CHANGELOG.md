# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased (1.0.0-beta.1)

[eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) was upgraded from
`v26.x.x` to `v27.x.x` which drops support for `eslint@6` and Node `v12` and `v17`. See the
[changelogs here](https://github.com/jest-community/eslint-plugin-jest/blob/main/CHANGELOG.md#2700-2022-08-28)

-   fix formatting in CHANGELOG
-   upgrade dev dependencies
    ```
    @types/eslint                      ^8.4.5  →  ^8.21.0
    @typescript-eslint/eslint-plugin  ^5.30.6  →  ^5.51.0
    @typescript-eslint/parser         ^5.30.6  →  ^5.51.0
    eslint                            ^8.19.0  →  ^8.33.0
    eslint-config-prettier             ^8.5.0  →   ^8.6.0
    eslint-plugin-import              ^2.26.0  →  ^2.27.5
    eslint-plugin-jest                ^26.6.0  →  ^27.2.1
    prettier                           ^2.7.1  →   ^2.8.4
    typescript                         ^4.7.4  →   ^4.9.5
    ```

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
