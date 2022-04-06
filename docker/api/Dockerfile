FROM node:buster

WORKDIR /build
ADD ./target/package.json ./
ADD ./target/index.js ./
ADD ./target/.env ./

ENV NODE_ENV production

RUN npm install --production

CMD ["node", "index.js"]
