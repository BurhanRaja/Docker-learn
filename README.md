# Docker-learn

## Volume

Volume allows us to share data between host & container and also between containers.

## Docker CLI Commands

To Pull the image from the docker hub registry into our local cache :- 
``` 
docker pull [imageName]:tag
```

To run a container :- 
``` 
docker run [imageName]:tag
```

To run a container in detached mode (in background) :- 
``` 
docker run -d [imageName] 
```

To run an existing container :- 
``` 
docker start [containerName] 
```

List of Running Container :- 
``` 
docker ps 
```

List of Stopped and Running Container :- 
```
docker ps -a 
```

Stop a Container :- 
``` 
docker stop [containerId] 
```

Kill a Container :- 
``` 
docker kill [containerName] 
```

Exposing Container to Port:-

```
docker run -d -p 8080:80 [imageName]
```

Exposing Container to Multiple Ports:-

```
docker run -d -p 3000:80 -p 8080:80 [imageName]
```

Get image info :- 
``` 
docker image inspect [imageName] 
```

### Limits for Running Container
```
docker run --memory="256m" [imageName]
docker run --cpus=".5" [imageName]
```

### Running a Container using CLI
```
docker run --publish 80:80 --name [containerName] [imageName]
docker ps
docker stop [containerName]
docker rm [containerName]
```

Attach Shell to a Running Container
```
docker container exec -it [containerName] --bash
```

### Cleaning Up

Remove stopped and all Stopped Container
```
docker rm [containerName]
docker rm $(docker ps -a -q)
```

Get all Docker Images
```
docker images
```

Delete images
```
docker rmi [imageName]
```

Removes all images that are not in use
```
docker system prune -a
```
