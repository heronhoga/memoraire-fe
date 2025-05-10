FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

ARG PUBLIC_BACKEND_PORT
ARG PUBLIC_APP_KEY

ENV PUBLIC_BACKEND_PORT=${PUBLIC_BACKEND_PORT}
ENV PUBLIC_APP_KEY=${PUBLIC_APP_KEY}

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["node", "./dist/server/entry.mjs"]
