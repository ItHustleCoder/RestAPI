FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g

COPY . .
RUN npm install -g npm@8.11.0
RUN npm install typescript
RUN npm run build
COPY .env ./dist/
WORKDIR ./dist

EXPOSE 5003

CMD node server.js