import express from "express";
import bodyParser from "body-parser";
import winston from 'winston';

let instance = express();
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({
    extended: false
}));
let Emps = [{ EmpNo: 1, EmpName: 'A' }, { EmpNo: 2, EmpName: 'B' }];

instance.get('/api/employees', (req, resp) => {
    winston.log('info', 'The Get Request', {
        someKey: `Data ${JSON.stringify(Emps)}`
    });
    resp.send(JSON.stringify(Emps));
});

instance.post('/api/employees', (req, resp) => {
    let emp = {};
    try {
        emp.EmpNo = req.body.EmpNo;
        emp.EmpName = req.body.EmpName;
        if (emp.EmpNo < 0) throw `EmpNo cannot be -Ve ${emp.EmpNo}`;
        if (emp.EmpName === "") throw `EmpName cannot blank`;
        Emps.push(emp);
        resp.send(JSON.stringify(Emps));
        winston.log('info', 'The Post Request is Successful', {
            someKey: `Data ${JSON.stringify(emp)}`
        });
    } catch (e) {
        winston.error(e, () => {
            someKey: `Failed to add Record ${e}`
        });
        resp.send(e);
    } finally {
        console.log('Process the Post');
    }

});

instance.listen(4003, () => {
    console.log('Server started on port 3002');
});
console.log('service started...');