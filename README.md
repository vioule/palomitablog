# Palomita Blog

## Use with Docker :

#### - Build images :
>Exec the command in the root directory.

    // FRONT OFFICE //
    docker build . -f docker/frontoffice.dockerFile -t palomitablog_frontoffice
    // BACK OFFICE //
    docker build . -f docker/backoffice.dockerFile -t palomitablog_backoffice

#### - Run containers :
    // FRONT OFFICE //
    // development environment //
    docker-compose -f docker/frontoffice.dev.docker-compose.yml up
    // test environment //
    docker-compose -f docker/frontoffice.test.docker-compose.yml up

    // BACK OFFICE //
    // development environment //
    docker-compose -f docker/backoffice.dev.docker-compose.yml up
    // test environment //
    docker-compose -f docker/backoffice.test.docker-compose.yml up
---
## Use with Node :

>You must have at least Node.js v12 install on your machine.

#### - Installation :

Install dependencies in the root directory :

    npm i

#### - Utilization :
>Exec the commands in the root directory.

Run the app in dev environment :
    
    // FRONT OFFICE //
    NODE_ENV=development npm run dev:frontoffice
    // BACK OFFICE //
    NODE_ENV=development npm run dev:backoffice

Build the production app with webpack :

    // FRONT OFFICE //
    npm run build:frontoffice
    // BACK OFFICE //
    npm run build:backoffice

Run the app in prod environment :

    // FRONT OFFICE //
    npm run start:frontoffice
    // BACK OFFICE //
    npm run start:backoffice

Run all the tests :
    
    npm test

Run tests in watch mode :

    npm run test:watch

## Access to the app :
* Front office:
 [http://localhost:8080](http://localhost:8080)
* Back office:
 [http://localhost:8081](http://localhost:8081)
