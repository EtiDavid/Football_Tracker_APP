#!/bin/bash
rm -rf dist
mkdir dist
cp -r frontend/* dist/
echo "✅ Build complete: files copied to dist/"
