#!/bin/bash

docker-compose up --build
if [ $? -ne 0 ]; then
    echo "Failed to start Jenkins. Please check the Docker logs for more details."
    exit 1
fi