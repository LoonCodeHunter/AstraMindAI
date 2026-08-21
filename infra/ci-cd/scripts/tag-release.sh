#!/bin/bash
set -e

VERSION=$1

git tag -a "v$VERSION" -m "Release $VERSION"
git push origin "v$VERSION"

echo "Release tagged: v$VERSION"
