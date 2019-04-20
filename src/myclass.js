let myModule = require('./moduleclass');
class MyClass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return parseInt(this.x) + parseInt(this.y);
    }
    getLength() {
        let obj = new myModule();
        let str = "I am ES 6 for Node.js";
        return obj.getLength(str);
    }
}

let myObj = new MyClass(10, 20);
console.log(`Add = ${myObj.add()}`);
console.log(`Length = ${myObj.getLength()}`);