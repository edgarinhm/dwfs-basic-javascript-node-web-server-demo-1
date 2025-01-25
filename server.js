// Import required modules
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const cors = require('cors');
const corsOptions = require('./cors-options');
const path = require('path');
const bodyParser = require('body-parser');
const { APP_PORT, APP_HOST } = require('./constants/api-constants');
const { httpStatus } = require('./constants/http-constants');
const { apiUrlPedidos, apiUrlProductos, apiUrlUsuarios } = require('./constants/api-constants');
const startServer = require('./sequelize-server');
const startMongoServer = require('./mongo-server');

// Create an Express application
const app = express();
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "/public"));

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// Define a route to serve the HTML file
app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.render('index', { apiUrlProductos: apiUrlProductos, apiUrlPedidos: apiUrlPedidos, apiUrlUsuarios: apiUrlUsuarios });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(httpStatus.SERVER_ERROR).send('Something Went Wrong!');
});

const server = {
    start: (app) => {
        app.listen(APP_PORT, () => {
            console.log(`Servidor corriendo en ${APP_HOST}:${APP_PORT}`);
        });
    }
}

// Start the server
startServer(server, app);
//startMongoServer(server, app);