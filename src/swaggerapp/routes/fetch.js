let orm = require('sequelize');
let departments = [];
let ormInstance = new orm("mysql://root:P@ssw0rd_@localhost/company", {
    define: {
        timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }
});
let departmentModel = ormInstance.import('./../../../models/department.js');
module.exports = (app) => {
    app.get('/api/departments', (req, resp) => {
        departmentModel.sync({
            force: false
        }).then(() => {
            departmentModel.findAll().then((depts) => {
                resp.send({ status: 200, data: JSON.stringify(depts) });
            });
        });
    });
};