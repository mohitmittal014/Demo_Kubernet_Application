FROM node:lts-alpine3.17

ENV PORT=9000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD [ "npm", "start" ]