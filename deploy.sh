#!/bin/bash -eux
pwd

# build and run
echo "Build and run"
# frontend
docker build -f ./docker/nift/Dockerfile ./nift -t nift
docker ps -a -q -f name=nift | xargs docker rm -f
docker run -d --name nift --restart=always -p 3000:3000 nift

# backend
