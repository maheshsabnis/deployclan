"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = require('./dal');

var instance = (0, _express2.default)();
var dalObj = new api();

instance.use(_bodyParser2.default.json());
instance.use(_bodyParser2.default.urlencoded({ extended: false }));
instance.use((0, _cors2.default)());

instance.get('/api/departments', function (req, resp) {
    dalObj.getDepartments(req, resp);
});
instance.post('/api/departments', function (req, resp) {
    dalObj.createDepartment(req, resp);
});
instance.put('/api/departments/:id', function (req, resp) {
    dalObj.updateDepartment(req, resp);
});

instance.delete('/api/departments/:id', function (req, resp) {
    dalObj.deleteDepartment(req, resp);
});

instance.listen(9007, function () {
    console.log('server started on port 9007');
});