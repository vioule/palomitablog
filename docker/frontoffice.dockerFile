FROM node:lts
WORKDIR /palomitablog
COPY package*.json ./
RUN npm i
COPY .babelrc ./
COPY jest.* ./
COPY ./frontoffice ./frontoffice
RUN git init
EXPOSE 8080
