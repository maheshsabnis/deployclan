"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = require('./restapi');
var instance = (0, _express2.default)();
var apiObj = new api();
instance.use(_bodyParser2.default.json());
instance.use(_bodyParser2.default.urlencoded({
    extended: false
}));
instance.get('/api/employees', function (req, resp) {
    apiObj.get(req, resp);
});
instance.post('/api/employees', function (req, resp) {
    apiObj.post(req, resp);
});
instance.listen(3002, function () {
    console.log('Server started on port 3002');
});
console.log('service started...');