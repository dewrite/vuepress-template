#!/bin/bash

\npm run build -- sites/$1 -d dist/$1
# \npm run build -- sites/$1 -d dist/$1 --debug






# vuepress build rome -c config/config.ts -d dist/rome
# cp -Rf config sites/$1/.vuepress
# npm run build -- sites/$1 -d dist/$1