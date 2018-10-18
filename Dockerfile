FROM node:8
ARG CONF_TYPE_ARG
ENV CONF_TYPE=$CONF_TYPE_ARG
ENV NPM_CONFIG_LOGLEVEL warn

RUN apt update && \
    apt install -y python make g++ git build-essential && \
    npm install -g pm2@2.7.1 && \
    mkdir /app
COPY . /app
WORKDIR /app
RUN  npm cache verify && npm install
EXPOSE 8080

#CMD pm2-docker start /mnt/config/${NETWORK_TYPE}/ecosystem.config.js

ENTRYPOINT ["./start.sh"]
