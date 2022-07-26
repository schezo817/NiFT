#!/bin/bash -eux
pwd

# build and run
echo "Frontend : build and run"
# frontend
docker build -f ./docker/frontend/Dockerfile ./frontend -t nift-frontend
docker ps -a -q -f name=nift-frontend | xargs docker rm -f
docker run -d --name nift-frontend --restart=always -p 3000:3000 nift-frontend

# backend