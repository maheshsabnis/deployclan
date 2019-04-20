let orm = require('sequelize');
class DataAccess {
    constructor() {
        this.departments = [];
        this.ormInstance = new orm("mysql://root:P@ssw0rd_@localhost/company", {
            define: {
                timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
            }
        });
        this.departmentModel = this.ormInstance.import('./../../models/department.js');
    }

    getDepartments(req, resp) {
        this.departmentModel.sync({
            force: false
        }).then(() => {
            this.departmentModel.findAll().then((depts) => {
                resp.send({ status: 200, data: JSON.stringify(depts) });
            });
        });
    }
    createDepartment(req, resp) {
        req.params.id;
        let dept = {
            DeptId: req.body.DeptId,
            DeptNo: req.body.DeptNo,
            DeptName: req.body.DeptName,
            Location: req.body.Location,
            Capacity: req.body.Capacity
        };


        this.departmentModel.sync({
            force: false
        }).then(() => {
            this.departmentModel.create({
                DeptId: dept.DeptId,
                DeptNo: dept.DeptNo,
                DeptName: dept.DeptName,
                Location: dept.Location,
                Capacity: dept.Capacity
            }).then(() => {
                resp.send({ status: 201, message: 'Department created successfully' });
            });
        });
    }
    updateDepartment(req, resp) {
        let deptId = req.params.id;
        let dept = {
            DeptId: req.body.DeptId,
            DeptNo: req.body.DeptNo,
            DeptName: req.body.DeptName,
            Location: req.body.Location,
            Capacity: req.body.Capacity
        };
        if (deptId !== dept.DeptId) {
            resp.send({ status: 400, message: 'DeptId in header and body not match' });
        } else {
            this.departmentModel.sync({
                force: false
            }).then(() => {
                this.departmentModel.update({
                    DeptNo: dept.DeptNo,
                    DeptName: dept.DeptName,
                    Location: dept.Location,
                    Capacity: dept.Capacity
                }, {
                        where: {
                            DeptId: deptId
                        }
                    }).then(() => {
                        resp.send({ status: 200, message: 'Department updated successfully' });
                    });
            });
        }

    }
    deleteDepartment(req, resp) {
        let deptId = req.params.id;
        this.departmentModel.sync({
            force: false
        }).then(() => {
            this.departmentModel.destroy({
                where: {
                    DeptId: deptId
                }
            }).then(() => {
                resp.send({ status: 200, message: 'Department deleted successfully' });
            });
        });
    }
}


module.exports = DataAccess;


