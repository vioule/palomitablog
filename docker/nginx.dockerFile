FROM nginx
RUN apt-get update
RUN apt-get install openssl
COPY nginx.conf ./etc/nginx/conf.d/palomitablog.conf
RUN cd etc/nginx && mkdir ssl
RUN openssl req \
    -new \
    -nodes \
    -newkey rsa:2048 \
    -keyout etc/nginx/ssl/palomitablog.key \
    -out etc/nginx/ssl/palomitablog.csr \
    -x509 \
    -sha256 \
    -days 1095 \
    -subj "/C=FR/ST=Gironde/L=Bordeaux/O=Palomita/OU=Palomita Blog/CN=palomitablog" \
    -addext "subjectAltName=DNS.1:palomitablog,DNS.2:admin.palomitablog"
EXPOSE 80
EXPOSE 443
