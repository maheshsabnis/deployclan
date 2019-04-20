'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var orm = require('sequelize');

var DataAccess = function () {
    function DataAccess() {
        _classCallCheck(this, DataAccess);

        this.departments = [];
        this.ormInstance = new orm("mysql://root:P@ssw0rd_@localhost/company", {
            define: {
                timestamps: false // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
            }
        });
        this.departmentModel = this.ormInstance.import('./../../models/department.js');
    }

    _createClass(DataAccess, [{
        key: 'getDepartments',
        value: function getDepartments(req, resp) {
            var _this = this;

            this.departmentModel.sync({
                force: false
            }).then(function () {
                _this.departmentModel.findAll().then(function (depts) {
                    resp.send({ status: 200, data: JSON.stringify(depts) });
                });
            });
        }
    }, {
        key: 'createDepartment',
        value: function createDepartment(req, resp) {
            var _this2 = this;

            req.params.id;
            var dept = {
                DeptId: req.body.DeptId,
                DeptNo: req.body.DeptNo,
                DeptName: req.body.DeptName,
                Location: req.body.Location,
                Capacity: req.body.Capacity
            };

            this.departmentModel.sync({
                force: false
            }).then(function () {
                _this2.departmentModel.create({
                    DeptId: dept.DeptId,
                    DeptNo: dept.DeptNo,
                    DeptName: dept.DeptName,
                    Location: dept.Location,
                    Capacity: dept.Capacity
                }).then(function () {
                    resp.send({ status: 201, message: 'Department created successfully' });
                });
            });
        }
    }, {
        key: 'updateDepartment',
        value: function updateDepartment(req, resp) {
            var _this3 = this;

            var deptId = req.params.id;
            var dept = {
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
                }).then(function () {
                    _this3.departmentModel.update({
                        DeptNo: dept.DeptNo,
                        DeptName: dept.DeptName,
                        Location: dept.Location,
                        Capacity: dept.Capacity
                    }, {
                        where: {
                            DeptId: deptId
                        }
                    }).then(function () {
                        resp.send({ status: 200, message: 'Department updated successfully' });
                    });
                });
            }
        }
    }, {
        key: 'deleteDepartment',
        value: function deleteDepartment(req, resp) {
            var _this4 = this;

            var deptId = req.params.id;
            this.departmentModel.sync({
                force: false
            }).then(function () {
                _this4.departmentModel.destroy({
                    where: {
                        DeptId: deptId
                    }
                }).then(function () {
                    resp.send({ status: 200, message: 'Department deleted successfully' });
                });
            });
        }
    }]);

    return DataAccess;
}();

module.exports = DataAccess;