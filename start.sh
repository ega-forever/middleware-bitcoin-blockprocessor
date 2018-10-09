#!/bin/sh

pm2-runtime start ecosystem.config.js --env $(echo $NETWORK_TYPE)

#pm2-docker start /mnt/config/${NETWORK_TYPE}/ecosystem.config.js
