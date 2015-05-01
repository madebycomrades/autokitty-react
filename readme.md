# AutoKitty

## Tech

- ES6
- jspm
- Isomorphic React
- Flux architecture
- Koa server
- CouchDB (Docker container for dev)

## Prerequisites

- iojs^1.81 npm^2.8.3 (Consider managing Node versions with [nvm](https://github.com/creationix/nvm))
- Docker (https://docs.docker.com/installation/mac)

## Quick start

> Make sure the Docker client and boot2docker are installed and working. i.e. `docker ps` command should work

```sh
npm install # jspm install happens on postinstall hook
npm run db:pull # pull the CouchDB Docker image
npm run db:init # spin up the db
npm run watch:start:dev
```
