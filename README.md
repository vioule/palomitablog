# Palomita Blog

## Use with Docker :

#### - Build image :
>Exec the command in the root directory (palomitablog).

    // frontoffice //
    docker build . -f docker/frontoffice.dockerFile -t palomitablog_frontoffice

#### - Run container :
    // frontoffice //
    docker run -it -p 8080:8080  palomitablog_frontoffice bash

#### - Run the app :
>Exec the commands in the directory 'palomitablog' of the container.

Run the app in dev environment :
    
    // frontoffice //
    npm run dev:frontoffice

Build the production app with webpack :

    // frontoffice //
    npm run build:frontoffice

Run the app in prod environment :

    // frontoffice //
    npm run start:frontoffice

Run all the tests :
    
    npm test

Run tests in watch mode :

    npm run test:watch

##### - Access to the app :
* Front office:
 [http://localhost:8080](http://localhost:8080)

---
## Use without Docker :

>You must have at least Node.js v12 install on your machine.

Install dependencies in the root directory :

    npm i

Then you can run all npm scripts in the root directory.

##### - Access to the app :
* Front office:
 [http://localhost:8080](http://localhost:8080)