class RESTApi {
    constructor() {
        this.Employees = [{
            EmpNo: 1,
            EmpName: 'A'
        }, {
            EmpNo: 2,
            EmpName: 'B'
        }];

        console.log('In ctor ' + this.Employees.length);
    }

    get(req, res) {
        console.log('In Get' + res + '  ' + this);
        console.log(this.Employees.length);
        console.log(JSON.stringify(this.Employees));
        res.send(JSON.stringify(this.Employees));
    }
    post(req, res) {
        console.log('In Post');
        let emp = {
            EmpNo: req.body.EmpNo,
            EmpName: req.body.EmpName
        };

        this.Employees.push(emp);
        res.send(JSON.stringify(this.Employees));
    }

}
module.exports = RESTApi;