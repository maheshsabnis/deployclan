"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var myModule = require('./moduleclass');

var MyClass = function () {
    function MyClass(x, y) {
        _classCallCheck(this, MyClass);

        this.x = x;
        this.y = y;
    }

    _createClass(MyClass, [{
        key: "add",
        value: function add() {
            return parseInt(this.x) + parseInt(this.y);
        }
    }, {
        key: "getLength",
        value: function getLength() {
            var obj = new myModule();
            var str = "I am ES 6 for Node.js";
            return obj.getLength(str);
        }
    }]);

    return MyClass;
}();

var myObj = new MyClass(10, 20);
console.log("Add = " + myObj.add());
console.log("Length = " + myObj.getLength());