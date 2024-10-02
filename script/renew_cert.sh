#/bin/sh

docker exec nginx cp /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bak
docker exec nginx cp /etc/nginx/conf.d/default.conf.renew /etc/nginx/conf.d/default.conf
docker exec nginx nginx -s reload

doas certbot renew --dry-run --webroot -w $HOST_CHALLENGE_PATH

docker exec nginx cp /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.renew
docker exec nginx cp /etc/nginx/conf.d/default.conf.bak /etc/nginx/conf.d/default.conf
docker exec nginx nginx -s reload