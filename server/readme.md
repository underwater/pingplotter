Create a new docker container:

docker run --name pingplotterdb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=abc123  mongo:4.0.26

Start the container:
docker container start pingplotterdb
