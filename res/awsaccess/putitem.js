'use strict';

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_awsSdk2.default.config.update({
    region: 'local',
    endpoint: 'http://localhost:8000'
});

// 1. doc client
var documentClient = new _awsSdk2.default.DynamoDB.DocumentClient();
console.log('Please wait, I am importing Product Data from JSOn file ');
var productsData = [{
    "CategoryName": "Electrical",
    "Manufacturer": "MS-Power",
    "Price": 2000,
    "ProductId": "Prd0001",
    "ProductName": "Iron"
}, {
    "CategoryName": "Electrical",
    "Manufacturer": "TS-Power",
    "Price": 2400,
    "ProductId": "Prd0002",
    "ProductName": "Mixer"
}, {
    "CategoryName": "Electronics",
    "Manufacturer": "MSIT",
    "Price": 98000,
    "ProductId": "Prd0003",
    "ProductName": "Laptop"
}, {
    "CategoryName": "Electronics",
    "Manufacturer": "TSIT",
    "Price": 20000,
    "ProductId": "Prd0004",
    "ProductName": "Desktop"
}, {
    "CategoryName": "Food",
    "Manufacturer": "MS-Food",
    "Price": 20,
    "ProductId": "Prd0005",
    "ProductName": "Lays"
}, {
    "CategoryName": "Food",
    "Manufacturer": "TS-Food",
    "Price": 300,
    "ProductId": "Prd0006",
    "ProductName": "Chips"
}];
//let products = JSON.parse(fs.readFileSync(__dirname + '../../data/data.json', 'utf-8'));
//let products = JSON.parse(productsData);

productsData.forEach(function (prd) {
    console.log(JSON.stringify(prd));

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
    documentClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add Product", prd.ProductId, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", prd.ProductId);
        }
    });
});