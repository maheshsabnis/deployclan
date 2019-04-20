'use strict';

var orm = require('sequelize');
var ormInstance = new orm("mysql://root:P@ssw0rd_@localhost/company", {
    define: {
        timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }
});

var employees = ormInstance.import('./../../models/employee.js');
// find records based on condition
ormInstance.sync({
    force: false
}).then(function () {
    employees.findAll({
        where: {
            DeptId: 10
        }
    }).then(function (emps) {
        console.log('Employees ' + JSON.stringify(emps));
    });
});
// find records based on condition and update
// ormInstance.sync({
//     force: false
// }).then(() => {
//     employees.update({
//         Salary: 200000
//     }, {
//             where: {
//                 DeptId: 10
//             }
//         }).then(emps => {
//             console.log(`Updated Employees ${JSON.stringify(emps)}`);
//         });
// });

// find records based on condition and delete
ormInstance.sync({
    force: false
}).then(function () {
    employees.destroy({
        where: {
            DeptId: 30
        }
    }).then(function (emps) {
        console.log(' Employees ' + JSON.stringify(emps));
    });
});

// using row queries for update 
ormInstance.query("Update employee SET Salary=Salary*0.5 WHERE DeptId=10").spread(function (result, metadata) {
    console.log('Result ' + result);
    console.log('Metadata foe number of records effected ' + metadata);
});