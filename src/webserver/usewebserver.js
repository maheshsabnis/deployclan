let ws = require('./simplewebserver');

let serverObject = new ws();
let serverText = serverObject.createAndResponseString();
serverText.listen(8080);
let serverJson = serverObject.createAndResponseJSON();
serverJson.listen(8081);