# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine
WORKDIR /app

# Install curl and wget
RUN apk add --no-cache curl wget bash

# Ensure /tmp exists and is writable
RUN mkdir -p /tmp && chmod 1777 /tmp

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm install --production

EXPOSE 3000
CMD ["npm", "start"]
