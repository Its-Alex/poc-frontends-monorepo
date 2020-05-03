# Monorepo React CRA/yarn workspaces/lerna

In this repository I tried to setup a monorepo to use React CRA with shared
components and a storybook.

## Why CRA

Using `Create React App` is the best way to follow react update and keep
compatibility with new features.

In this repo I tried to touch CRA config as little as possible.

## Goals

- [X] React create app that use shared components
  - [X] Hot reloading
- [ ] Storybook
  - [ ] Using view from React CRA app
  - [ ] Using component from shared library

## React CRA

With lerna I add a dependencie to `common` in `my-app` that allow use to require
files from `common`.

### Hot reloading

I use [`craco`](https://github.com/gsoft-inc/craco) with
[`get-yarn-workspace`](https://github.com/viewstools/yarn-workspaces-cra-crna#readme)
to override CRA configuration and add other repos to babel loader in
[`craco-config.js`](./packages/my-app/craco.config.js).

# Source links

- https://dev.to/shnydercom/monorepos-lerna-typescript-cra-and-storybook-combined-4hli
- https://github.com/facebook/create-react-app/issues/1333#issuecomment-587415796