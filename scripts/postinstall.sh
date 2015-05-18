#!/usr/bin/env bash

set -e

if [ $JSPM_GITHUB_AUTH_TOKEN ]; then
  jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN
fi

jspm install

if [ $JSPM_BUNDLE ]; then
  npm run bundle
fi

if [ $LOCAL_DB_INIT ]; then
  npm run local:db:init
fi
