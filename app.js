// //entry point into our application. This is the file that node will execute
// 
// var fs = require('fs'),
//     http = require('http'),
//     path = require('path'),
//     methods = require('methods'),
//     express = require('express'),
//     bodyParser = require('body-parser'),
//     session = require('express-session'),
//     cors = require('cors'),
//     passport = require('passport'),
//     errorhandler = require('errorhandler'),
//     mongoose = require('mongoose');
// 
// var isProduction = process.env.NODE_ENV === 'production';
// 
// // Create global app object
// var app = express();
// 
// app.use(cors());
// 
// // Normal express config defaults
// app.use(require('morgan')('dev'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// 
// app.use(require('method-override')());
// app.use(express.static(__dirname + '/public'));
// 
// app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));
// 
// if (!isProduction) {
//   app.use(errorhandler());
// }
// 
// if(isProduction){
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect('mongodb://localhost/conduit');
//   mongoose.set('debug', true);
// }
// 
// 
// /// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found boo');
//   err.status = 404;
//   next(err);
// });
// 
// /// error handlers
// 
// // development error handler
// // will print stacktrace
// if (!isProduction) {
//   app.use(function(err, req, res, next) {
//     console.log(err.stack);
// 
//     res.status(err.status || 500);
// 
//     res.json({'errors': {
//       message: err.message,
//       error: err
//     }});
//   });
// }
// 
// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.json({'errors': {
//     message: err.message,
//     error: {}
//   }});
// })
// 
// 
// 
// const product = require('./routes/product.route'); // Imports routes for the products
// 
// app.use('/products', product);
// 
// 
// // finally, let's start our server...
// var server = app.listen( process.env.PORT || 3000, function(){
//   console.log('Listening on port ' + server.address().port);
// });


//app.js


const express = require('express');
const bodyParser = require('body-parser');

const products = require('./routes/product.route'); // Imports routes for the products

const tests = require('./routes/test.route'); // Imports routes for the products

const app = express();

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
app.use('/tests', tests);

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});









