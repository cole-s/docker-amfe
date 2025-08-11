# Dockerfile for app-shell
FROM node:18-alpine AS build

WORKDIR /app

# Copy workspace configuration
COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./
COPY angular.json* ./
COPY workspace.json* ./

# Install dependencies
RUN npm ci

# Copy source code (entire workspace needed for Nx)
COPY . .

# Build app-shell and its dependencies
RUN npx nx build app-shell --configuration=production

# Production stage
FROM nginx:alpine AS production

# Copy built application
COPY --from=build /app/dist/apps/app-shell /usr/share/nginx/html

# Copy nginx configuration
COPY apps/app-shell/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]