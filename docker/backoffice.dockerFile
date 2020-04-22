FROM node:lts
WORKDIR /palomitablog
COPY package*.json ./
RUN npm i
COPY .babelrc ./
COPY jest.setup.js ./
COPY ./backoffice ./backoffice
RUN git init
EXPOSE 8081
