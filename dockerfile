FROM node:20-alpine AS builder

WORKDIR /app

# 1. Define build arguments
ARG PUBLIC_APP_KEY
ARG PUBLIC_BACKEND_PORT

# 2. Set environment variables from those args
ENV PUBLIC_APP_KEY=${PUBLIC_APP_KEY}
ENV PUBLIC_BACKEND_PORT=${PUBLIC_BACKEND_PORT}

COPY package*.json ./
COPY .env ./
RUN npm install

COPY . .

# 3. Build with envs injected
RUN npm run build

# Runtime image
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["node", "./dist/server/entry.mjs"]
