FROM node:18-alpine

RUN apk add g++ make python3

WORKDIR /oreo/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

CMD ["node", "dist/src/main.js"]
