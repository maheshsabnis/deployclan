import {
    createServer
} from "http";
class WebServer {
    constructor() {
        this.Employee = [{
            EmpNo: 1,
            EmpName: 'A'
        }, {
            EmpNo: 2,
            EmpName: 'B'
        }];
    }
    createAndResponseString() {
        return createServer((request, response) => {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write('Hello Node.js, you have power with ES6');
            response.end();
        });

    }

    createAndResponseJSON() {
        return createServer((request, response) => {
            response.writeHead(200, {
                'Content-Type': 'application/json'
            });
            response.write(JSON.stringify(this.Employee));
            response.end();
        });
    }
}
module.exports = WebServer;