#!/bin/bash

# Stop and remove any previously running Jenkins containers via docker-compose
docker-compose -f "$(dirname "$0")/docker-compose.yml" down

# Start Jenkins with docker-compose
docker-compose -f "$(dirname "$0")/docker-compose.yml" up 

echo "Jenkins is starting. Visit http://localhost:8080 after a few moments."