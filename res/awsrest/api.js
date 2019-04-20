'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dal = require('./dal');

var objDal = new dal();

var instance = (0, _express2.default)();

instance.use(_bodyParser2.default.json());
instance.use(_bodyParser2.default.urlencoded({ extended: false }));
instance.use((0, _cors2.default)());

instance.get('/api/products', function (req, resp) {
    objDal.getData(req, resp);
});

instance.get('/api/products/:id', function (req, resp) {
    objDal.getSingleData(req, resp);
});

instance.post('/api/products', function (req, resp) {
    objDal.postData(req, resp);
});

instance.put('/api/products', function (req, resp) {
    objDal.putData(req, resp);
});

instance.delete('/api/products', function (req, resp) {
    objDal.deleteData(req, resp);
});

instance.listen(8090, function () {
    console.log('Started Reading on port 8090');
});