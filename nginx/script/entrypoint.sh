envsubst < /tmp/template/nginx.conf.template > /etc/nginx/nginx.conf
envsubst < /tmp/template/default.conf.template > /etc/nginx/conf.d/default.conf
envsubst < /tmp/template/default.conf.renew.template > /etc/nginx/conf.d/default.conf.renew

exec "nginx" "-g" "daemon off;"