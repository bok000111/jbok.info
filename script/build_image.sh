#/bin/sh

docker compose build --no-cache
docker save -o ./nginx.tar jbok_info-nginx
docker save -o ./react_build.tar jbok_info-react_build

scp ./nginx.tar jbokinfo:~/jbokinfo
scp ./react_build.tar jbokinfo:~/jbokinfo
scp ./docker-compose.yml jbokinfo:~/jbokinfo
scp ./.env jbokinfo:~/jbokinfo

rm ./nginx.tar ./react_build.tar