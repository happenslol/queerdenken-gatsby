#!/bin/bash
./node_modules/.bin/gatsby build
ssh dokku@queerdenken.de apps:create main
ssh dokku@queerdenken.de domains:add main queerdenken.de
ssh dokku@queerdenken.de config:set --no-restart main DOKKU_LETSENCRYPT_EMAIL=me@hwgnd.de
ssh dokku@queerdenken.de letsencrypt main
touch public/.static
cp -fv .dokku/* public
tar c public | ssh dokku@queerdenken.de tar:in main