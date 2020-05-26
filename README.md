# your-md-test

## Overview
The test has two parts
* The API Server
* The Website

Both of these are written in JavaScript of the following versions Node and NPM.
* Node: 12.16.3
* NPM : 6.14.4

## API Server
This is a simple Nodejs/Express server with a single endpoint **/conditions**
 
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
The website has been written in React/Redux, it is a single page without any routing
 
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
## Limitations

