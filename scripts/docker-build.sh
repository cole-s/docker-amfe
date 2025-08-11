echo "Building Docker images..."

docker build --target app-workspace/app-shell -t app-workspace/app-shell:latest .
docker build --target app-workspace/app-one -t app-workspace/app-one:latest .
docker build --target app-workspace/app-two -t app-workspace/app-two:latest .

echo "Docker images built successfully!"