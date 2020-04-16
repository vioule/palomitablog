# Palomita Blog

## Use with Docker :

#### - Build images :
>Exec the command in the root directory.

    // front office //
    docker build . -f docker/frontoffice.dockerFile -t palomitablog_frontoffice
    // back office //
    docker build . -f docker/backoffice.dockerFile -t palomitablog_backoffice

#### - Run containers :
    // FRONT OFFICE //
    // development environment //
    docker-compose -f docker/frontoffice.dev.docker-compose.yml up

    // BACK OFFICE //
    // development environment //
    docker-compose -f docker/backoffice.dev.docker-compose.yml up
---
## Use with Node :

>You must have at least Node.js v12 install on your machine.

#### - Installation :

Install dependencies in the root directory :

    npm i

#### - Utilization :
>Exec the commands in the root directory.

Run the app in dev environment :
    
    // front office //
    NODE_ENV=development npm run dev:frontoffice
    // back office //
    NODE_ENV=development npm run dev:backoffice

Build the production app with webpack :

    // front office //
    npm run build:frontoffice
    // back office //
    npm run build:backoffice

Run the app in prod environment :

    // front office //
    npm run start:frontoffice
    // back office //
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
 