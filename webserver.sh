#!/usr/bin/env bash

docker run -it --rm -d -p 8080:80 --name web -v $(pwd):/usr/share/nginx/html nginx
