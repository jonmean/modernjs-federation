FROM node:20-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --no-progress

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "serve"]
