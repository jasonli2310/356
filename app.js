const express = require('express');
const bodyParser = require('body-parser');

const products = require('./routes/product.route'); // Imports routes for the products
const tests = require('./routes/test.route'); // Imports routes for the products

const app = express();

app.use(express.static('public'))

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://publicuser:abcd1234@ds145573.mlab.com:45573/db_365';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', products);

app.use('/testmodel', tests)

let port = 1234;
app.listen(process.env.PORT ||port, () => {
    console.log('Server is up and running on port number ' + port);
});
