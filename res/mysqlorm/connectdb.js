"use strict";

var sequelize = require('sequelize');
// the object accepts, database name, username and password
var db = new sequelize("company", "root", "P@ssw0rd_", {
    host: 'localhost',
    dialect: 'mysql', // this is for mysql
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
// define model
var Person = db.define('personObj', {
    firstName: {
        type: sequelize.STRING,
        field: 'firstName'
    },
    lastName: {
        type: sequelize.STRING,
        field: 'firstName'
    },
    age: {
        type: sequelize.INTEGER,
        field: 'age'
    }
}, {
    freezeTableName: true // Model Table name will be same
});

Person.sync({
    force: true
}).then(function () {
    return Person.create({
        firstName: 'Mahesh',
        lastName: 'Sabnis',
        age: 43
    });
});