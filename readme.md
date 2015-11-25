# Express Sequelize API Sample

it's sample for creating an api with below.

- Framework: Express
- ORM: Sequelize
- DB: PostgreSQL

# Getting started

## Env

- osx
- docker-toolbox >= 1.9.1

## Run

### With docker


```sh
# Create a docker vm
$ docker-machine create --driver virtualbox express-api-sample

# Use the docker vm
$ eval "$(docker-machine env express-api-sample)"

# Check an access url
$ docker-machine ls

# Build and Run
$ docker-compose up

```

Access http://[your url]:3000/docs/api with browser

## Lib

- [babel](https://babeljs.io/)
    - ES6 transpiler
- [express](http://expressjs.com/)
    - Framework for Node
- [apidoc](http://apidocjs.com/)
    - API documentation
- [sequelize](http://docs.sequelizejs.com/en/latest/)
    - ORM for Node


