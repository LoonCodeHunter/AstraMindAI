FROM node:22-alpine
WORKDIR /app
COPY package.json tsconfig.json vite.config.ts ./
RUN npm install
COPY src ./src
COPY public ./public
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
