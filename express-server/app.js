const express = require('express')
var Worker = require("tiny-worker");
const fs = require('fs');
const app = express()
const port = 4000

// Add simple CORS headers, live site would be 
// set up to only allow specified headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS,HEAD");
  res.header('Access-Control-Allow-Headers', req.header("Access-Control-Request-Headers") || "*");
  return next();
});

// Add simple CORS headers for OPTION, live site would be 
// set up to only allow specified headers
app.options("/*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', req.header("Access-Control-Request-Headers"));
  res.header('Allow', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
  res.send(200);
});


app.get('/conditions', (req, res) => {
  //load file
  fs.readFile(__dirname + '/conditions.json', function (err, data) {
    if (err) {
      res.send(err)
      return
    }
    res.send(JSON.parse(data))

    // could use a worker to JSON.parse() in a new process 
    // if concerned about size of file causing Event loop blocking
    
    // contains worker code
    // var worker = new Worker("parseResponse.js");

    // worker.onmessage = function (ev) {
    //   res.send(ev.data)
    //   worker.terminate()
    // };
    // worker.postMessage(data);
  });

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))