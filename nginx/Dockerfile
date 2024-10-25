FROM nginx:1.27.1-alpine-slim

WORKDIR /app

RUN mkdir -p /var/www/jbok.info && \
	chown -R nginx:nginx /var/www/jbok.info

EXPOSE 80 443

CMD ["nginx", "-c", "/run/secrets/nginx.conf", "-g", "daemon off;"]