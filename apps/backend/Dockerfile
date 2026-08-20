FROM node:22-alpine AS base
WORKDIR /app

COPY package.json tsconfig.json ./
RUN npm install --only=production

COPY src ./src
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=base /app/dist ./dist
COPY package.json ./
RUN npm install --only=production

CMD ["node", "dist/server.js"]
      
