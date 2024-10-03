#/bin/sh

# Change to the project directory
cd ~/jbok.info

# Stop the running container
docker compose down -v

# Untar docker images
tar -xf ~/jbok.info/images.decrypted.tar -C ~/jbok.info
for file in ~/jbok.info/images/*.tar; do
  docker load -i $file
done
docker image prune -f
docker container prune -f

# Start container
docker compose up -d