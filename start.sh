#!/bin/bash

cd /usr/share/nginx/html/monolito

version_file=$(mktemp)

envsubst < "bocombbm-mf-ib-version.js" > "$version_file"

mv "$version_file" "bocombbm-mf-ib-version.js"

chmod 644 bocombbm-mf-ib-version.js

nginx -g 'daemon off;'
