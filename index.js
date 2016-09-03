'use strict';

var express = require('express');
var app  = express();

var port = process.env.PORT || 80;

app.get("/", function(req, res, next) {
  res.send("Hello World!");
});

app.get("/healthcheck", function(req, res, next) {
  res.send("healthy");
});

app.use(function(err, req, res, next) {
  res.status(500);
  res.send("Oops something went wrong!");
});

app.listen(port);
