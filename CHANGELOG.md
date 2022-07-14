# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
