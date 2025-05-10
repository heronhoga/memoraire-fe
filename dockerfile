FROM node:18 AS builder

WORKDIR /app

ARG PUBLIC_APP_KEY
ARG PUBLIC_BACKEND_PORT

ENV PUBLIC_APP_KEY=$PUBLIC_APP_KEY
ENV PUBLIC_BACKEND_PORT=$PUBLIC_BACKEND_PORT

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf
