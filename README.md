# nestjs-notification-service-demo

## Install NodeJS
https://nodejs.org/en/

## Install Github Client
https://desktop.github.com/

## Install Development Tools
https://code.visualstudio.com/

## Install MongoDB
https://www.mongodb.com/try/download/community

## Install MongoDB GUI - Compass 
https://www.mongodb.com/products/compass

(Compass is included in installing MongoDB now)

## Install NestJS CLI
npm i -g @nestjs/cli

## Initial Project
nest new nestjs-notification-service-demo

### Basic Knowledge of NestJS
Modules : https://docs.nestjs.com/modules
Controllers : https://docs.nestjs.com/controllers
Service & Provider : https://docs.nestjs.com/providers
Pipes: https://docs.nestjs.com/pipes

### Basic Command

#### Generate Module
nest g module [module name]

#### Generate Comntroller
nest g controller [controller name]

#### Generate Service
nest g service [service name]

### Using .env file to config
Reference : https://docs.nestjs.com/techniques/configuration

### Connect With MonogoDB
Reference : https://docs.nestjs.com/techniques/mongodb

### to fix window and linix has different set enivronemnt command
npm i cross-env

### to use express query
npm install --save @types/express-serve-static-core

## install validator
npm i --save class-validator class-transformer

## install jwt passsport
npm i @nestjs/jwt @nestjs/passport passport passport-jwt --save

## install bcryptjs (for hashing)
npm i bcryptjs --save

## Using this demo

### Change the MogoDB connection
.env.development

|Vraible|Description|
|---|---|
|MONGODB_URI|The URI to connect MongoDB|
|-|-|

## Start service in development environment
npm run start:dev
