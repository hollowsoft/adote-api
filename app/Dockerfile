FROM node:21-alpine

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

CMD ["yarn", "start:prod"]
