FROM node:lts
WORKDIR /palomitablog
COPY package*.json ./
RUN npm i
COPY .babelrc ./
COPY jest.* ./
COPY ./frontoffice ./frontoffice
EXPOSE 8080
