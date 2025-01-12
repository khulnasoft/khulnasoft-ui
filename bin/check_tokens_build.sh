#!/bin/bash

./bin/build_tokens.mjs
git diff --exit-code ./src/tokens/build
if [ $? -ne 0 ]; then
  echo "Tokens build is outdated. Please run \`./bin/build_tokens.mjs\` and commit the changes"
  exit 1
else
  echo "Tokens build is up-to-date."
  exit 0
fi
