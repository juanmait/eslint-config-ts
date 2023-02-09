# eslint-config-ts


  - [Install](#install)
  - [Usage](#usage)
  - [Releases](#releases)
    - [Regular Releases](#regular-releases)
    - [Beta Releases](#beta-releases)
  - [Peer Dependencies](#peer-dependencies)
  - [Dependency changelogs](#dependency-changelogs)

## Install

```bash
npm install @cubostuff/eslint-config-ts
```

You'll also need to install the `peerDependencies`.

```bash
npm install @types/eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-eslint-comments eslint-plugin-import prettier typescript
```

## Usage

Create a file `.eslintrc.js` and add the following.

> should be **.eslintrc.cjs** if your package.json has `"type": "module"`.

```js
/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    // add this if you're in a monorepo and don't want a specific member to inherit eslint rules from
    // other configs that exists higher on the file system's tree.

    extends: '@cubostuff/eslint-config-ts',
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
};
```

## Releases

### Regular Releases

Make sure to check this links:

-   https://www.conventionalcommits.org
-   https://keepachangelog.com
-   https://semver.org

```bash
npm version minor
# options (major, minor, or patch)
# - increments the version your package.json based on the type of the change
# - commits this version bump
# - creates a tag for the current release

npm publish
git push && git push --tags
```

### Beta Releases

```bash
npm version 1.0.0-beta.1
# - bump package version
# - creates a git tag

npm publish --tag beta
git push
git push --tags
```

## Peer Dependencies

-   @types/eslint
-   @typescript-eslint/eslint-plugin
-   @typescript-eslint/parser
-   eslint
-   eslint-config-prettier
-   eslint-plugin-eslint-comments
-   eslint-plugin-import
-   prettier
-   typescript

## Dependency changelogs

Be aware of breaking changes when upgrading dependencies. Check the links bellow:

-   [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/main/CHANGELOG.md)
-   [eslint](https://github.com/eslint/eslint/blob/main/CHANGELOG.md)
-   [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest/blob/main/CHANGELOG.md)
