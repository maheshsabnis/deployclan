'use strict';

var ws = require('./simplewebserver');

var serverObject = new ws();
var serverText = serverObject.createAndResponseString();
serverText.listen(8080);
var serverJson = serverObject.createAndResponseJSON();
serverJson.listen(8081);