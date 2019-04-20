import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

let api = require('./dal');

let instance = express();
let dalObj = new api();

instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(cors());

instance.get('/api/departments', (req, resp) => {
    dalObj.getDepartments(req, resp);
});
instance.post('/api/departments', (req, resp) => {
    dalObj.createDepartment(req, resp);
});
instance.put('/api/departments/:id', (req, resp) => {
    dalObj.updateDepartment(req, resp);
});

instance.delete('/api/departments/:id', (req, resp) => {
    dalObj.deleteDepartment(req, resp);
})

instance.listen(9007, () => {
    console.log('server started on port 9007');
});