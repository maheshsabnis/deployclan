let orm = require('sequelize');
let departments = [];
let ormInstance = new orm("mysql://root:P@ssw0rd_@localhost/company", {
    define: {
        timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
    }
});
let departmentModel = ormInstance.import('./../../../models/department.js');
module.exports = (app) => {
    app.post('/api/departments', (req, resp) => {
        req.params.id;
        let dept = {
            DeptId: req.body.DeptId,
            DeptNo: req.body.DeptNo,
            DeptName: req.body.DeptName,
            Location: req.body.Location,
            Capacity: req.body.Capacity
        };


         departmentModel.sync({
            force: false
        }).then(() => {
            departmentModel.create({
                DeptId: dept.DeptId,
                DeptNo: dept.DeptNo,
                DeptName: dept.DeptName,
                Location: dept.Location,
                Capacity: dept.Capacity
            }).then(() => {
                resp.send({ status: 201, message: 'Department created successfully' });
            });
        });
    });
};