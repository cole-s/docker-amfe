# Multi-stage build - one file creates 3 different images
FROM node:18-alpine as build-base
# ... installs dependencies and copies source code

FROM build-base as build-shell
RUN npx nx build app-shell --prod

FROM build-base as build-app-one  
RUN npx nx build app-one --prod

FROM build-base as build-app-two
RUN npx nx build app-two --prod

# Three separate production images
FROM nginx:alpine as app-shell
FROM nginx:alpine as app-one  
FROM nginx:alpine as app-two