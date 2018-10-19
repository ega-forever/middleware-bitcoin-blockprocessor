#!/bin/sh

pm2-runtime ecosystem.config.js --env $(echo $CONF_TYPE)

#pm2-docker start /mnt/config/${CONF_TYPE}/ecosystem.config.js
