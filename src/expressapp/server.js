import express from "express";
import bodyParser from "body-parser";
let api = require('./restapi');
let instance = express();
let apiObj = new api();
instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({
    extended: false
}));
instance.get('/api/employees', (req, resp) => {
    apiObj.get(req, resp);
});
instance.post('/api/employees', (req, resp) => {
    apiObj.post(req, resp);
});
instance.listen(3002, () => {
    console.log('Server started on port 3002');
});
console.log('service started...');