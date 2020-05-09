FROM theasp/clojurescript-nodejs:shadow-cljs-alpine as build

WORKDIR /app

RUN apk add tree

COPY ./src ./src
COPY ./public ./public
COPY ./shadow-cljs.edn ./
COPY ./package.json ./

RUN npm install
RUN shadow-cljs release app
RUN tree

FROM nginx:alpine as runtime

WORKDIR /app

RUN rm -rf /etc/nginx/conf.d/*

COPY ./container/server.conf /etc/nginx/conf.d

COPY --from=build /app/public/ /usr/share/app
