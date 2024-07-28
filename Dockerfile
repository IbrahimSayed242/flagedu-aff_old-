FROM node:14-alpine

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

COPY . /app

RUN npm install yarn
RUN yarn install
RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# ADD package.json yarn.lock ./
# RUN yarn
# ADD . ./
# RUN yarn build
