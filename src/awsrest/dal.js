import aws from 'aws-sdk';
aws.config.update({
    region: 'local',
    endpoint: 'http://localhost:8000'
});

class AWSRest {
    constructor() {
        this.docClient = new aws.DynamoDB.DocumentClient();
    }

    getData(req, resp) {
        let params = {
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
        this.docClient.scan(params, (err, data) => {
            if (err) {
                console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                resp.send(data);
                console.log("Scan succeeded.");
                data.Items.forEach(function (prd) {
                    console.log(`${prd.ProductId} ${prd.ProductName} ${prd.Price} ${prd.CategoryName} ${prd.Manufacturer}`);
                });
            }
        });
    }

    getSingleData(req, resp) {
        console.log(`Received Product Id ${req.params.id}`);
        let params = {
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
        this.docClient.scan(params, (err, data) => {
            if (err) {
                console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                resp.send(data);
                console.log("Scan succeeded.");
                data.Items.forEach(function (prd) {
                    console.log(`${prd.ProductId} ${prd.ProductName} ${prd.Price} ${prd.CategoryName} ${prd.Manufacturer}`);
                });
            }
        });
    }

    postData(req, resp) {
        let prd = {
            ProductId: req.body.ProductId,
            ProductName: req.body.ProductName,
            Price: req.body.Price,
            CategoryName: req.body.CategoryName,
            Manufacturer: req.body.Manufacturer
        };
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
        this.docClient.put(params, (err, data) => {
            if (err) {
                console.error("Unable to add Product", prd.ProductId, ". Error JSON:", JSON.stringify(err, null, 2));
            } else {
                resp.send({ status: 200, message: `Item Added ${prd.ProductId}` });
                console.log("PutItem succeeded:", prd.ProductId);
            }
        });
    }

    putData(req, resp) { }

    deleteData(req, resp) { }
}

module.exports = AWSRest;