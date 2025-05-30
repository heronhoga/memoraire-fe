FROM node:20-alpine AS builder
WORKDIR /app

COPY .env ./
COPY .env.local ./
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["node", "./dist/server/entry.mjs"]
