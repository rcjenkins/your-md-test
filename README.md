# your-md-test

## Overview
The solution has two parts
* API Server
* Website

Both of these are written in JavaScript with the following versions Node and NPM.
* Node: 12.16.3
* NPM : 6.14.4

## API Server
This is a simple Nodejs/Express server with a single endpoint **/conditions**

The conditions.json files has been included. All images retrieved from http://assets.your.md/conditions/... have been edited to be retrieved from https://assets.your.md/conditions/
 
To run the server on port http://localhost/4000
 
Install the node modules:
```
npm ci
```
and run the server
``` 
node app.js
``` 
## Web site
The website has been written in React/Redux using React Hooks, it is a single page without any routing
 
To run the server on port http://localhost/3000 
 
Install the node modules:
``` 
npm ci
``` 
and run the server
``` 
npm start
```
This should open the browser and direct to the base URL / . A list for conditions will be displayed 

## Decisions / Compromises

* No use of SSL on API server or Website
* No error page routing - react-router can be used to route to an error page if a different url is entered (currently list is always shown)
* No tests written
  * Unit test can be written in Jest for rendering (Snapshots) and interactions
  * End-to-end tests can be written in cucumber js (allowing use of JS a single programming language) and Selenium web driver
* Docker containerisation
  * Use of simple Docker compose template file

*I look forward to going over the solution and improvements soon.*

