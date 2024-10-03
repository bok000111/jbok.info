FROM nginx:1.27.1-alpine-slim

ADD . /app
WORKDIR /app

EXPOSE 80 443

RUN --mount=type=secret,id=nginx_conf \
	cp /run/secrets/nginx_conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
