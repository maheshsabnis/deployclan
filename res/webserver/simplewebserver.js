'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('http');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebServer = function () {
    function WebServer() {
        _classCallCheck(this, WebServer);

        this.Employee = [{
            EmpNo: 1,
            EmpName: 'A'
        }, {
            EmpNo: 2,
            EmpName: 'B'
        }];
    }

    _createClass(WebServer, [{
        key: 'createAndResponseString',
        value: function createAndResponseString() {
            return (0, _http.createServer)(function (request, response) {
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                response.write('Hello Node.js, you have power with ES6');
                response.end();
            });
        }
    }, {
        key: 'createAndResponseJSON',
        value: function createAndResponseJSON() {
            var _this = this;

            return (0, _http.createServer)(function (request, response) {
                response.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                response.write(JSON.stringify(_this.Employee));
                response.end();
            });
        }
    }]);

    return WebServer;
}();

module.exports = WebServer;