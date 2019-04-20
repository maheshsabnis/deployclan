'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileManager = function () {
    function FileManager() {
        _classCallCheck(this, FileManager);
    }

    _createClass(FileManager, [{
        key: 'writeTextFile',
        value: function writeTextFile() {
            (0, _fs.writeFile)('myfile.txt', 'The Test Data', function (err) {
                if (err) {
                    console.log('Message ' + err.message);
                    return;
                }
                console.log('File is Written Successfully');
            });
        }
    }, {
        key: 'readTextFile',
        value: function readTextFile() {
            (0, _fs.readFile)('myfile.txt', function (err, data) {
                if (err) {
                    console.log('Error ' + err.message);
                    return;
                }
                console.log('data read from file ' + data.toString());
            });
        }
    }]);

    return FileManager;
}();

module.exports = FileManager;