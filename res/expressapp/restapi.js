'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RESTApi = function () {
    function RESTApi() {
        _classCallCheck(this, RESTApi);

        this.Employees = [{
            EmpNo: 1,
            EmpName: 'A'
        }, {
            EmpNo: 2,
            EmpName: 'B'
        }];

        console.log('In ctor ' + this.Employees.length);
    }

    _createClass(RESTApi, [{
        key: 'get',
        value: function get(req, res) {
            console.log('In Get' + res + '  ' + this);
            console.log(this.Employees.length);
            console.log(JSON.stringify(this.Employees));
            res.send(JSON.stringify(this.Employees));
        }
    }, {
        key: 'post',
        value: function post(req, res) {
            console.log('In Post');
            var emp = {
                EmpNo: req.body.EmpNo,
                EmpName: req.body.EmpName
            };

            this.Employees.push(emp);
            res.send(JSON.stringify(this.Employees));
        }
    }]);

    return RESTApi;
}();

module.exports = RESTApi;