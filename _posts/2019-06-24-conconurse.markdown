---
layout: post
title:  "Concourse Docker "
date:   2019-06-24 11:14:26 -0400 
comments: false
categories: concourse
---

Setting up Concourse Docker.

Reference the website [Concourse Docker](https://github.com/concourse/concourse-docker)
and [vault-integration](https://github.com/pivotalservices/concourse-pipeline-samples/tree/master/concourse-pipeline-patterns/vault-integration)


You'll want to modify *docker-compose.yml*. An example is listed below where
the default port has been modified to 8281


```bash
cat docker-compose.yml
version: '3'

services:
  db:
    image: postgres
    environment:
      POSTGRES_DB: concourse
      POSTGRES_USER: concourse_user
      POSTGRES_PASSWORD: concourse_pass

  web:
    image: concourse/concourse
    command: web
    links: [db]
    depends_on: [db]
    ports: ["8281:8080"]
    volumes: ["./keys/web:/concourse-keys"]
    environment:
      CONCOURSE_EXTERNAL_URL: http://aipiggybot.io:8281
      CONCOURSE_POSTGRES_HOST: db
      CONCOURSE_POSTGRES_USER: concourse_user
      CONCOURSE_POSTGRES_PASSWORD: concourse_pass
      CONCOURSE_POSTGRES_DATABASE: concourse
      CONCOURSE_ADD_LOCAL_USER: admin:S0m3Password
      CONCOURSE_MAIN_TEAM_LOCAL_USER: admin
      CONCOURSE_VAULT_URL: https://za261.io:8200
      CONCOURSE_VAULT_AUTH_BACKEND: "approle"
      CONCOURSE_VAULT_AUTH_PARAM: "role_id:2c8"
      CONCOURSE_VAULT_CLIENT_TOKEN: s.aaaaaaaaaaaaaaaaU

  worker:
    image: concourse/concourse
    command: worker
    privileged: true
    depends_on: [web]
    volumes: ["./keys/worker:/concourse-keys"]
    links: [web]
    stop_signal: SIGUSR2
    environment:

```

## Vault

```bash

vault secrets enable concourse kv

vault write concourse/main/mongo_connection_string value=$MONGO_CONNECTION_STRING
vault write concourse/main/mongo_database value=$MONGO_DATABASE

# To disable
# vault secrets disable concourse/
```



<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=671657696349259";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


<!--  Enter text below, if you want -->


<div class="fb-comments"  data-numposts="5"></div>






