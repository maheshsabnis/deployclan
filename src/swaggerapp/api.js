let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let swaggerJSDoc = require('swagger-jsdoc');
let swaggerUi = require('swagger-ui-express');

const app = express();

const API_PORT = process.env.API_PORT || 3003;

const swaggerDefinition = {
    info: {
        title: 'Express REST API Swagger Documentation',
        version: '1.0.0',
        description: 'Endpoints to test  for CRUD Operations',
    },
    host: 'localhost:3003',
    basePath: '/',
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'bearer',
            in: 'header',
        },
    }
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/fetch')(app);
require('./routes/create')(app);
// require('./routes/forgotPassword')(app);
// require('./routes/resetPassword')(app);
// require('./routes/updatePassword')(app);
// require('./routes/updatePasswordViaEmail')(app);
// require('./routes/findUsers')(app);
// require('./routes/deleteUser')(app);
// require('./routes/updateUser')(app);

// eslint-disable-next-line no-console
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

//module.exports = app;
