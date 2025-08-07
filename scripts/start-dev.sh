#!/bin/bash
echo "Starting development environment..."
docker-compose up -d

echo "Development environment started!"
echo "App Shell: http://localhost:4200"
echo "App One: http://localhost:4201"
echo "App Two: http://localhost:4202"