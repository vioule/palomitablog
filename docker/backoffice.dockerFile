FROM node:lts
WORKDIR /palomitablog
COPY package*.json ./
RUN npm i
COPY .babelrc ./
COPY jest.* ./
COPY ./backoffice ./backoffice
EXPOSE 8081
