FROM node:8
ARG ARG_NETWORK_TYPE
ENV NETWORK_TYPE=ARG_NETWORK_TYPE
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
