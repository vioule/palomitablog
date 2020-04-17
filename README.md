# Palomita Blog

## Use with Docker :

#### - Build images :
>Exec the command in the root directory.

    // FRONT OFFICE //
    docker build . -f docker/frontoffice.dockerFile -t palomitablog_frontoffice
    // BACK OFFICE //
    docker build . -f docker/backoffice.dockerFile -t palomitablog_backoffice
    // NGINX //
    docker build . -f docker/nginx.dockerFile -t palomitablog_nginx

Or you can add --build to the docker-compose commands below.

#### - Run containers :
You can run services inside different environment using the corresponding docker-compose files.

Services available are :
* frontoffice
* backoffice
* proxy
---

    // development environment //
    docker-compose -f docker/dev.docker-compose.yml up [SERVICENAME]

    // FRONT OFFICE //
    // test environment //
    docker-compose -f docker/frontoffice.test.docker-compose.yml up

    // BACK OFFICE //
    // test environment //
    docker-compose -f docker/backoffice.test.docker-compose.yml up

>Don't specify service name if you want to run all services.

### Access to the app :
#### With Nginx
>Using Nginx proxy enforce the app to use subdomain with SSL

You must add the following line in your host file system :

    127.0.0.1 admin.palomitablog palomitablog

You must validate the access of the SSL certificate.

Then you can access to the app in your browser :

* Front office:
 [http://palomitablog](http://palomitablog)
* Back office:
 [http://admin.palomitablog](http://admin.palomitablog)

> If you don't want to use Nginx the app is still accessible to :

* Front office:
 [http://localhost:8080](http://localhost:8080)
* Back office:
 [http://localhost:8081](http://localhost:8081)

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

### Access to the app :
* Front office:
 [http://localhost:8080](http://localhost:8080)
* Back office:
 [http://localhost:8081](http://localhost:8081)
