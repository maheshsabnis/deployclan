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
    app.get('/api/departments', function (req, resp) {
        departmentModel.sync({
            force: false
        }).then(function () {
            departmentModel.findAll().then(function (depts) {
                resp.send({ status: 200, data: JSON.stringify(depts) });
            });
        });
    });
};