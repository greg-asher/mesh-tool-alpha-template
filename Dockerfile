FROM node:20-slim

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY . .

# Default port is 8080, can be overridden by PORT env variable
EXPOSE 8080

CMD ["node", "src/index.js"]
