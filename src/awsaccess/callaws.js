import aws from 'aws-sdk';

aws.config.update({
    region: 'local',
    endpoint: 'http://localhost:8000'
});

let dynamoDb = new aws.DynamoDB();

var params = {
    TableName: "Product",
    KeySchema: [
        {
            AttributeName: "CategoryName",
            KeyType: "HASH", //Partition key
        },
        {
            AttributeName: "ProductId",
            KeyType: "RANGE" //Sort key
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: "CategoryName",
            AttributeType: "S"
        },
        {
            AttributeName: "ProductId",
            AttributeType: "S"
        }
    ],
    ProvisionedThroughput: {       // Only specified if using provisioned mode
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

dynamoDb.createTable(params, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});