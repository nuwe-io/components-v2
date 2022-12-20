<h1 align="center" style="border-bottom: none;">📦 Nuwe multipackage monorepo</h1>
<h3 align="center">Monorepo for design system, shared components and other utils</h3>

<p align="center">
  <a href="http://commitizen.github.io/cz-cli">
    <img alt="commitizen" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
  <a href="https://github.com/nuwe-io/components-v2/actions/workflows/release.yml">
    <img alt="monorepo release" src="https://github.com/nuwe-io/components-v2/actions/workflows/release.yml/badge.svg">
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@nuwe/lib">
    <img alt="@nuwe/lib" src="https://img.shields.io/npm/v/@nuwe/lib?color=brown&label=%40nuwe%2Flib&style=flat-square&logo=npm">
  </a>
  <a href="https://www.npmjs.com/package/@nuwe/component-library">
    <img alt="@nuwe/component-library" src="https://img.shields.io/npm/v/@nuwe/component-library?color=darkgreen&label=%40nuwe%2Fcomponent-library&logo=npm&style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/@nuwe/materio">
    <img alt="@nuwe/materio" src="https://img.shields.io/npm/v/@nuwe/materio?color=blue&label=%40nuwe%2Fmaterio&style=flat-square&logo=npm">
  </a>
  <a href="https://www.npmjs.com/package/@nuwe/hooks">
    <img alt="@nuwe/hooks" src="https://img.shields.io/npm/v/@nuwe/hooks?color=blueviolet&label=%40nuwe%2Fhooks&style=flat-square&logo=npm">
  </a>
</p>

## Project structure

![Packages](./public/packages.png)

## Table of contents

- [Nuwe multipackage monorepo](#nuwe-multipackage-monorepo)
  - [Project structure](#project-structure)
  - [Table of contents](#table-of-contents)
  - [Using conventional commits](#using-conventional-commits)
    - [There is no develop branch](#there-is-no-develop-branch)
    - [Branch naming convention](#branch-naming-convention)
  - [Getting Started](#getting-started)
  - [Test the packages in other repos](#test-the-packages-in-other-repos)
  - [Using conventional commits](#using-conventional-commits-1)
    - [Types](#types)
    - [Scope](#scope)
    - [Breaking changes](#breaking-changes)
    - [Fixing up commits](#fixing-up-commits)
  - [Publishing changes to NPM](#publishing-changes-to-npm)
  - [Updating dependencies](#updating-dependencies)
  - [Usefull links](#usefull-links)

## Using conventional commits

### There is no develop branch

Features should branch off `main` and PRs should go into `main`. This means when a feature has been completed and PR merged, a release will be made in production.

### Branch naming convention

As this is a monorepo and all commits are in one place, we must distinguish branches for the different projects so that we know which commits belong to which when looking at this history. Refer to the below table for how to name branches.

| Project           | Branch Prefix | Examples                                                     |
| :---------------- | :------------ | :----------------------------------------------------------- |
| Component Library | cl            | `cl/feat/nav-bar`, `cl/fix/footer`                           |
| Materio           | materio       | `materio/feat/dynamic-inputs`, `materio/fix/firefox-buttons` |
| Hooks             | hooks         | `hooks/feat/use-auth-user`, `hooks/fix/api-module`           |
| lib               | lib           | `lib/feat/get-request`, `lib/fix/post-request`               |

## Getting Started

Install all dependencies via npm

```bash
yarn
```

Create build versions for all the shared packages

This runs the `yarn build:library` command for all packages where this command is available

```bash
lerna run build:library
```

Now you're ready to start developing! `cd` into the directory you want develop in and run commands as normal e.g.

```bash
cd packages/materio
yarn storybook
```

## Test the packages in other repos

```bash
# Inside the root directory of the package you use
npm link

## Inside the root directory project you want to use the package
npm link <name>

## Once finnished testing to unlink
npm unlink <name>
```

## Using conventional commits

> The commits and pulls should be done from the root folder

This project uses the [Conventional Commits format](https://www.conventionalcommits.org/en/v1.0.0/#summary) for all changes to the source repository. If you submit a PR, the CI build won't pass until all commits satisfy the format. This format embeds semantic information in each commit that's used to automatically generate release notes.

The Conventional Commits format is as follows:

```bash
<type>([optional scope]): <description>

[optional body]

[optional footer(s)]
```

### Types

Only certain types are permitted, with the most common being:

- fix: a commit that fixes a bug.
- feat: a commit that adds new functionality.
- docs: a commit that adds or improves documentation.
- test: a commit that adds unit tests.
- perf: a commit that improves performance, without functional changes.
- chore: a catch-all type for any other commits. For instance, if you're implementing a single feature and it makes - sense to divide the work into multiple commits, you should mark one commit as feat and the rest as chore.

### Scope

The scope optionally provides extra context. If you're fixing a ListView bug, for example, you might use fix(listview). Or if you are working inside the materio folder package you could provide (materio-listview).

One scope with special meaning is reg, short for regression. This is used for fixes for bugs that weren't present in the most recent stable release.

### Breaking changes

Breaking changes are indicated by putting BREAKING CHANGE: at the start of the message body, for any commit type. Optionally they may be emphasized by appending a ! after the type and scope. The message body should provide appropriate guidance for developers affected by the breaking change.

### Fixing up commits

If you already made commits and they don't meet the Conventional Commits specification, you have a couple of options:

- if there's only one commit to redo, the easiest option is to use git _commit --amend with_ no staged changes, which will allow you to edit the commit message.
- if you have multiple commits to reformat, you'll probably need to do an interactive rebase and use the reword option.

## Publishing changes to NPM

To publish shared packages:

- Ensure you are authenticated to publish to NPM via the console (Run `npm login` in your terminal and use the email & credentials in 1password).
- Make sure you have installed on required packages (Run `npm` in root directory)
- Make sure you're on the `main` branch and there are no local commits
- Go to the root directory for the monorepo
- Run `lerna publish`
- Follow the wizard instructions to publish the packages to NPM

## Updating dependencies

Run `yarn lernaupdate`, which will start a wizard where you can choose which dependencies to update for which package/app.

## Usefull links

- [Lerna version and publish](https://lerna.js.org/docs/features/version-and-publish)
- [Commit lint](https://github.com/conventional-changelog/commitlint)
- [Commits and versioning](https://levelup.gitconnected.com/improve-your-commits-and-versioning-in-javascript-56f72c0ab761)
- [Semantic release monorepo](https://github.com/pmowrer/semantic-release-monorepo)
- [Storybook with nextjs](https://itnext.io/nextjs-storybookjs-material-ui-jest-swr-fe2ff5cb9af8)
- [Locally test packages with npm](https://javascript.plainenglish.io/test-your-library-locally-with-npm-link-a5aa79d07270)
