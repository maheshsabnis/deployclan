'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_awsSdk2.default.config.update({
    region: 'local',
    endpoint: 'http://localhost:8000'
});

var AWSRest = function () {
    function AWSRest() {
        _classCallCheck(this, AWSRest);

        this.docClient = new _awsSdk2.default.DynamoDB.DocumentClient();
    }

    _createClass(AWSRest, [{
        key: 'getData',
        value: function getData(req, resp) {
            var params = {
                TableName: "Product",
                ProjectionExpression: "#ProductId, #ProductName, #Price, #CategoryName, #Manufacturer",
                ExpressionAttributeNames: {
                    "#ProductId": "ProductId",
                    "#ProductName": "ProductName",
                    "#Price": "Price",
                    "#CategoryName": "CategoryName",
                    "#Manufacturer": "Manufacturer"
                }
            };

            console.log('Scanning data from Product Table');
            this.docClient.scan(params, function (err, data) {
                if (err) {
                    console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    resp.send(data);
                    console.log("Scan succeeded.");
                    data.Items.forEach(function (prd) {
                        console.log(prd.ProductId + ' ' + prd.ProductName + ' ' + prd.Price + ' ' + prd.CategoryName + ' ' + prd.Manufacturer);
                    });
                }
            });
        }
    }, {
        key: 'getSingleData',
        value: function getSingleData(req, resp) {
            console.log('Received Product Id ' + req.params.id);
            var params = {
                TableName: "Product",
                ProjectionExpression: "#ProductId, #ProductName, #Price, #CategoryName, #Manufacturer",
                FilterExpression: "#ProductId = :id",
                ExpressionAttributeNames: {
                    "#ProductId": "ProductId",
                    "#ProductName": "ProductName",
                    "#Price": "Price",
                    "#CategoryName": "CategoryName",
                    "#Manufacturer": "Manufacturer"
                },
                ExpressionAttributeValues: {
                    ":id": req.params.id
                }
            };

            console.log('Scanning data from Product Table');
            this.docClient.scan(params, function (err, data) {
                if (err) {
                    console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    resp.send(data);
                    console.log("Scan succeeded.");
                    data.Items.forEach(function (prd) {
                        console.log(prd.ProductId + ' ' + prd.ProductName + ' ' + prd.Price + ' ' + prd.CategoryName + ' ' + prd.Manufacturer);
                    });
                }
            });
        }
    }, {
        key: 'postData',
        value: function postData(req, resp) {
            var prd = {
                ProductId: req.body.ProductId,
                ProductName: req.body.ProductName,
                Price: req.body.Price,
                CategoryName: req.body.CategoryName,
                Manufacturer: req.body.Manufacturer
            };
            var params = {
                TableName: "Product",
                Item: {
                    "ProductId": prd.ProductId,
                    "ProductName": prd.ProductName,
                    "Price": prd.Price,
                    "CategoryName": prd.CategoryName,
                    "Manufacturer": prd.Manufacturer
                }
            };
            this.docClient.put(params, function (err, data) {
                if (err) {
                    console.error("Unable to add Product", prd.ProductId, ". Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    resp.send({ status: 200, message: 'Item Added ' + prd.ProductId });
                    console.log("PutItem succeeded:", prd.ProductId);
                }
            });
        }
    }, {
        key: 'putData',
        value: function putData(req, resp) {}
    }, {
        key: 'deleteData',
        value: function deleteData(req, resp) {}
    }]);

    return AWSRest;
}();

module.exports = AWSRest;