
# Nuwe multipackage monorepo

## Usefull links

- [Lerna version and publish](https://lerna.js.org/docs/features/version-and-publish)
<https://github.com/conventional-changelog/commitlint>
<https://levelup.gitconnected.com/improve-your-commits-and-versioning-in-javascript-56f72c0ab761>
<https://itnext.io/nextjs-storybookjs-material-ui-jest-swr-fe2ff5cb9af8>

<https://javascript.plainenglish.io/test-your-library-locally-with-npm-link-a5aa79d07270>

## Use local packages

```bash
# Inside the root directory of the package you use
npm link

## Inside the root directory project you want to use the package
npm link <name>

## Once finnished testing to unlink
npm unlink <name>
```

## Project strcuture

![Packages](./public/packages.png)
