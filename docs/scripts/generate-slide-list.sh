#!/bin/sh

# read content of `markdown` directory and create a js file with the list of slides

# create a list of slides with their directory name, it will have the following format:
# `directory-name/file-name`
# example: `00-intro/00-TITLE.md`
slides=$(find ../markdown -type f -name '*.md' -printf '%P\n')

# create a js file with the list of slides
echo "export const slides = [" > slides-list.js
for slide in $slides
do
  echo "  \"$slide\"," >> slides-list.js
done
echo "];" >> slides-list.js
