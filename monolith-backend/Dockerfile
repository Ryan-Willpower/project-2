FROM node:alpine

WORKDIR /usr/app/

COPY ./package.json /usr/app
COPY ./dist/ /usr/app/

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

RUN apk --no-cache add --virtual builds-deps build-base python

RUN yarn &&\
  yarn cache clean

CMD /wait && yarn start:production