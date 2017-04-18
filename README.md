# docker-demo
Demo app on [Docker](https://www.docker.com) with NodeJS, Postgres and Memcached.

## Pre-requisites
Only pre-requisite for running this application is [Docker](https://www.docker.com). To install [Docker](https://www.docker.com), follow instructions on the [official Docker installation](https://docs.docker.com/engine/installation/) guide.

## Run
```bash
$ git clone https://github.com/mohuk/docker-demo && cd $_
$ docker-compose up -d
```

The above command would spin up 3 containers one for each NodeJS application, Postgres and Memcached. NodeJS application container is built through the `Dockerfile` at the root of the project. [Postgres](https://hub.docker.com/_/postgres/) and [Memcached](https://hub.docker.com/_/memcached/) containers are built by their publish images hosted on [Docker Hub](https://hub.docker.com/). Compose will build and run the containers. Compose will also create a network connecting the 3 containers so the application can reach the 2 data stores. Each container is aliased on the network by its service name provided in the `docker-compose.yml` file.

Once the application is up, browse `http://localhost:3000` to run the application. The application contains 2 routes `/users` and `/users/cached` to demo data retrieval from Postgres and Memcached respectively.

Feedback and comments can be provided by opening an issue at the repository.
