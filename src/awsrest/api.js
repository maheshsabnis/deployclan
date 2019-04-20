import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
let dal = require('./dal');

let objDal = new dal();

let instance = express();

instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(cors());

instance.get('/api/products', (req, resp) => {
    objDal.getData(req, resp);
});

instance.get('/api/products/:id', (req, resp) => {
    objDal.getSingleData(req, resp);
});

instance.post('/api/products', (req, resp) => {
    objDal.postData(req, resp);
});

instance.put('/api/products', (req, resp) => {
    objDal.putData(req, resp);
});

instance.delete('/api/products', (req, resp) => {
    objDal.deleteData(req, resp);
});

instance.listen(8090, () => {
    console.log('Started Reading on port 8090');
});