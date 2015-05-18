#!/usr/bin/env bash

set -e

if [ -z "$IS_REMOTE_BUILD" ]; then
    exit 0
fi

jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN
jspm install
npm run bundle
