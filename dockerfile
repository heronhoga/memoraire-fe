# 1. Use build image
FROM node:20-alpine AS builder
WORKDIR /app

# ✅ Copy env BEFORE build
COPY .env ./
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# 2. Final image
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["node", "./dist/server/entry.mjs"]
