var express = require('express');
var app = express();
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3051;

apiController(app);

app.listen(port);