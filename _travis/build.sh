#!/bin/bash

if [[ "$TRAVIS_TAG" ]]; then
    rm -rf build
    npm run dist
    cd build
    # ziped in build/
    zip -q pdf-markdown-annotator-osx32.zip -r pdf-markdown-annotator/osx32
    zip -q pdf-markdown-annotator-osx64.zip -r pdf-markdown-annotator/osx64
    zip -q pdf-markdown-annotator-win32.zip -r pdf-markdown-annotator/win32
    zip -q pdf-markdown-annotator-win64.zip -r pdf-markdown-annotator/win64
    zip -q pdf-markdown-annotator-linux32.zip -r pdf-markdown-annotator/linux32
    zip -q pdf-markdown-annotator-linux64.zip -r pdf-markdown-annotator/linux64
    cd ../
    echo "ziped!"
else
    echo "Not Release"
fi