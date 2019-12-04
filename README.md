# Node RPC Server

Get the URL of a service by his name through JSON-RPC. It can 
be useful for service discovery implementation in an application built with 
a micro service architecture

## Installation
```bash
$ git clone https://github.com/tericcabrel/node-rpc-server.git
$ cd node-rpc-server
$ yarn
$ cp public/service.example.json public/service.json 
$ yarn start
```

## Make a request with the client
```bash
$ yarn client [serviceName]
```
Available service name: **google, facebook, twitter, github, microsoft, apple, amazon, netflix**
<br>

####Example
```bash
$ yarn client google

Result =>  { result: 'https://google.com' }
```
