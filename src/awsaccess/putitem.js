import aws from 'aws-sdk';
import fs from 'fs';
aws.config.update({
    region: 'local',
    endpoint: 'http://localhost:8000'
});

// 1. doc client
let documentClient = new aws.DynamoDB.DocumentClient();
console.log('Please wait, I am importing Product Data from JSOn file ');
let productsData = [
    {
        "CategoryName": "Electrical",
        "Manufacturer": "MS-Power",
        "Price": 2000,
        "ProductId": "Prd0001",
        "ProductName": "Iron"
    },
    {
        "CategoryName": "Electrical",
        "Manufacturer": "TS-Power",
        "Price": 2400,
        "ProductId": "Prd0002",
        "ProductName": "Mixer"
    },
    {
        "CategoryName": "Electronics",
        "Manufacturer": "MSIT",
        "Price": 98000,
        "ProductId": "Prd0003",
        "ProductName": "Laptop"
    },
    {
        "CategoryName": "Electronics",
        "Manufacturer": "TSIT",
        "Price": 20000,
        "ProductId": "Prd0004",
        "ProductName": "Desktop"
    },
    {
        "CategoryName": "Food",
        "Manufacturer": "MS-Food",
        "Price": 20,
        "ProductId": "Prd0005",
        "ProductName": "Lays"
    },
    {
        "CategoryName": "Food",
        "Manufacturer": "TS-Food",
        "Price": 300,
        "ProductId": "Prd0006",
        "ProductName": "Chips"
    }
];
//let products = JSON.parse(fs.readFileSync(__dirname + '../../data/data.json', 'utf-8'));
//let products = JSON.parse(productsData);

productsData.forEach((prd) => {
    console.log(JSON.stringify(prd));

    let params = {
        TableName: "Product",
        Item: {
            "ProductId": prd.ProductId,
            "ProductName": prd.ProductName,
            "Price": prd.Price,
            "CategoryName": prd.CategoryName,
            "Manufacturer": prd.Manufacturer
        }
    };
    documentClient.put(params, (err, data) => {
        if (err) {
            console.error("Unable to add Product", prd.ProductId, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", prd.ProductId);
        }
    });
});

