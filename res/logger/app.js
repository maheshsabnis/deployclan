"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _winston = require("winston");

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = (0, _express2.default)();
instance.use(_bodyParser2.default.json());
instance.use(_bodyParser2.default.urlencoded({
    extended: false
}));
var Emps = [{ EmpNo: 1, EmpName: 'A' }, { EmpNo: 2, EmpName: 'B' }];

instance.get('/api/employees', function (req, resp) {
    _winston2.default.log('info', 'The Get Request', {
        someKey: "Data " + JSON.stringify(Emps)
    });
    resp.send(JSON.stringify(Emps));
});

instance.post('/api/employees', function (req, resp) {
    var emp = {};
    try {
        emp.EmpNo = req.body.EmpNo;
        emp.EmpName = req.body.EmpName;
        if (emp.EmpNo < 0) throw "EmpNo cannot be -Ve " + emp.EmpNo;
        if (emp.EmpName === "") throw "EmpName cannot blank";
        Emps.push(emp);
        resp.send(JSON.stringify(Emps));
        _winston2.default.log('info', 'The Post Request is Successful', {
            someKey: "Data " + JSON.stringify(emp)
        });
    } catch (e) {
        _winston2.default.error(e, function () {
            someKey: "Failed to add Record " + e;
        });
        resp.send(e);
    } finally {
        console.log('Process the Post');
    }
});

instance.listen(4003, function () {
    console.log('Server started on port 3002');
});
console.log('service started...');