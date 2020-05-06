# Frontend monorepo

In this repository, I tried to set up a monorepo to use React
[CRA](https://github.com/facebook/create-react-app) with shared
components and a storybook.

Currently, an issue is opened on
[`create-react-app`](https://github.com/facebook/create-react-app/issues/1333)
I hope that it will be closed one the day.

## Why CRA

Using [`Create React App`](https://github.com/facebook/create-react-app) is the
best way to follow react update and keep compatibility with new features without
strong knowledge for webpack.

In this repo, I tried to touch the CRA config as little as possible.

## What about @react-workspaces/react-scripts

I know that there is another possibility with
[`@react-workspaces/react-scripts`](https://www.npmjs.com/package/@react-workspaces/react-scripts)
the problem is that I don't know what is done inside it and how close to CRA it
is so I prefer to custom a little bit CRA configuration.

## Goals

- [X] Create react app that use shared library from another project
  - [X] Hot reloading
  - [X] Watch
  - [X] Build
  - [X] With asset (image)
- [X] Storybook that use shared library from CRA and another project
  - [X] Hot reloading
  - [X] Watch
  - [X] Build
  - [X] With asset (image)
  - [X] Using view from React CRA app
  - [X] Using component from shared library

## React CRA

With lerna, I add dependencies to `common` in `my-app` that allow requiring
files from `common`.

### Hot reloading

I use [`craco`](https://github.com/gsoft-inc/craco) with
[`get-yarn-workspace`](https://github.com/viewstools/yarn-workspaces-cra-crna#readme)
to override CRA configuration and add others repositories to `babel-loader` in
[`craco-config.js`](./packages/my-app/craco.config.js).

## Storybook

I do the same thing that with CRA, storybook has functions to overrides CRA configuration.

## Getting started

Install dependencies:

```
$ yarn install
```

Start applications:

```
$ yarn lerna run start
```

See app:

- Go to `http://localhost:3000`
- Go to `http://localhost:9009`

Build applications

```
$ yarn lerna run build
```

# Source links

- https://dev.to/shnydercom/monorepos-lerna-typescript-cra-and-storybook-combined-4hli
- https://github.com/facebook/create-react-app/issues/1333#issuecomment-587415796
