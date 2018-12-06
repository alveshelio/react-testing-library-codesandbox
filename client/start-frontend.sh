#!/bin/bash

# Provide the appropriate application configuration file
cp -p /usr/share/nginx/html/config/alternatives/config-$ENV_PROFILE.js /usr/share/nginx/html/config/config.js

# Delete others configs files
rm -rf /usr/share/nginx/html/config/alternatives

# Start server
nginx -g "daemon off;"
