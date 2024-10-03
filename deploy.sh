#/bin/sh

# Change to the project directory
cd ~/jbok.info

# Stop the running container
docker compose down
docker image prune -f

# Untar docker images
tar -xf ~/jbok.info/images.decrypted.tar -C ~/jbok.info
docker load -i ~/jbok.info/images/nginx.tar
docker load -i ~/jbok.info/images/react_build.tar

# Start container
docker compose up -d