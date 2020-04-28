> You must have Docker to build and run this application.

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
>You can run services inside different environment using the corresponding docker-compose files.

Services available are :
* frontoffice
* backoffice
---

    // development environment //
    docker-compose -f docker/dev.docker-compose.yml up [SERVICENAME]

    // FRONT OFFICE //
    // test environment //
    docker-compose -f docker/frontoffice.test.docker-compose.yml up

    // BACK OFFICE //
    // test environment //
    docker-compose -f docker/backoffice.test.docker-compose.yml up

>Don't specify service name if you want to run both application.

### Access to the apps :
>Nginx reverse proxy usage enforce SSL subdomains.

You must add the following line in your host file system :

    127.0.0.1 admin.palomitablog palomitablog

You must trust SSL certificate.

Then you can access apps in your browser :

* Front office:
 [http://palomitablog](http://palomitablog)
* Back office:
 [http://admin.palomitablog](http://admin.palomitablog)
