# Multi-stage Dockerfile for Angular microfrontends
FROM node:18-alpine as build-base

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY nx.json ./
COPY tsconfig.base.json ./

# Copy any additional config files your project needs
COPY angular.json* ./
COPY workspace.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build all applications
RUN npx nx build app-shell --configuration=production
RUN npx nx build app-one --configuration=production  
RUN npx nx build app-two --configuration=production

# Production stage for app-shell
FROM nginx:alpine AS app-shell
COPY --from=build-base /app/dist/apps/app-shell /usr/share/nginx/html
COPY nginx-shell.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Production stage for app-one
FROM nginx:alpine AS app-one
COPY --from=build-base /app/dist/apps/app-one /usr/share/nginx/html
COPY nginx-app.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Production stage for app-two
FROM nginx:alpine AS app-two
COPY --from=build-base /app/dist/apps/app-two /usr/share/nginx/html
COPY nginx-app.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]