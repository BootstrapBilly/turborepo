# What is it? 

This is a typescript monorepo

## Apps

<b>Frontend clients</b>

- `an-app`: a React app for testing purposes

## Packages

<b>Shared logic and config</b>

- `config`: shared eslint and jest configs
- `constant`: constant values such as colours
- `server-common`: common logic to be shared between services
- `tsconfig`: shared tsconfigs
- `ui`: a react component library bundled using rollup

## Services

- `auth`: authentication service used to signup/login ect

## Commands

### Root level commands

` yarn install ` - run this at the root level to install all dependencies in all apps/packages/services

` yarn build ` - run this at the root level to build everything simultaneously 

` yarn dev` - run this at the root level to run everything simultaneously 

` yarn test` - run this at the root level to test everything everything simultaneously 

` skaffold dev` - run this at the root level to spin up a kubernetes cluster with all the services inside of it

### Scoped commands

` yarn build --scope="ui"` - build a specific app/package/service

` yarn dev --scope="an-app"` - run a specific app/package/service

` yarn test --scope="an-app"` - test a specific app/package/service

### Installing specific packages

`yarn workspace an-app add -D typescript` -  install typescript into the an-app client

`yarn add -D -W typescript` - install typescript into the root of the project

### Pipelines

<b>.github/workflows/an-app</b> -  a pipeline to build and test any changes commited to an-app client (deploy to s3 coming soon)
