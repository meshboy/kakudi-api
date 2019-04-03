FROM node:8

# create and set work directory
RUN mkdir -p /src/kakudi

WORKDIR /src/kakudi

COPY package*.json /src/kakudi/
# install all dependencies
RUN npm install

COPY src /src/kakudi/src
COPY README.md .env .babelrc /src/kakudi/

RUN npm run build

EXPOSE 8080

## mongo is damm slow, lets wait
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start