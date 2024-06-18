#!/bin/bash

# Fail script if any command returns a non-zero exit code
set -e

# Define domain to build URL
domain=$(cat ./CNAME)

# Define pages to request
pages=$(ls -d app/*/ | cut -f2 -d '/')

echo "Test page endpoints"

for page in $(echo $pages)
do
  url="https://$domain/$page"
  return_code=$(curl -s -o /dev/null -w "%{http_code}" $url)
  echo "/$page returned $return_code"
  if [ $return_code != "200" ]
  then
    exit 1
  fi
done
