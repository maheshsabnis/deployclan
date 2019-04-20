let OrmMySql = require('sequelize');
                            // mysql://username:password@host:port/database
const dbConnect = new OrmMySql("mysql://root:P@ssw0rd_@localhost/company", {
    define: {
        timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }
});
var employees = dbConnect.import('./../../models/employee.js');
/*make sure you use false here. otherwise the total data 
  from the imported models will get deleted and new tables will be created*/
dbConnect.sync({
    force: false
})
    .then(() => {
        employees.findAll().then(employees => {
            console.log(`data is ${JSON.stringify(employees)}`);
        });
        employees.create({
            EmpId: 2008,
            EmpNo: 'Emp-2008',
            EmpName: 'Tejas',
            Salary: 34000,
            DeptId: 30
        }).then((d) => {
            console.log('Created Successfully');
            employees.findAll().then(employees => {
                console.log(`data is ${JSON.stringify(employees)}`);
            });
        });
        console.log('sync is complete');
    });