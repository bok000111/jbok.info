FROM nginx:1.27.1-alpine-slim

ADD . /app
WORKDIR /app

COPY ./template /tmp/template
COPY ./script/entrypoint.sh ./

EXPOSE 80 443

ENTRYPOINT ["/bin/sh", "/app/entrypoint.sh"]
