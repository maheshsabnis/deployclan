'use strict';

var orm = require('sequelize');
var departments = [];
var ormInstance = new orm("mysql://root:P@ssw0rd_@localhost/company", {
    define: {
        timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }
});
var departmentModel = ormInstance.import('./../../../models/department.js');
module.exports = function (app) {
    app.post('/api/departments', function (req, resp) {
        req.params.id;
        var dept = {
            DeptId: req.body.DeptId,
            DeptNo: req.body.DeptNo,
            DeptName: req.body.DeptName,
            Location: req.body.Location,
            Capacity: req.body.Capacity
        };

        departmentModel.sync({
            force: false
        }).then(function () {
            departmentModel.create({
                DeptId: dept.DeptId,
                DeptNo: dept.DeptNo,
                DeptName: dept.DeptName,
                Location: dept.Location,
                Capacity: dept.Capacity
            }).then(function () {
                resp.send({ status: 201, message: 'Department created successfully' });
            });
        });
    });
};