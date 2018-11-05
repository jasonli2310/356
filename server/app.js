const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

var mongoose = require('mongoose');
mongoose.connect('mongodb://publicuser:abcd1234@ds145573.mlab.com:45573/db_365');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
}); 

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var Post = require("./models/post.model"); 
// could be called by the controller, which is called by the router


//save function
app.post('/posts', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Post({
    title: title,
    description: description
  })
  
  new_post.save(function(error){
    if (error){
      console.log('error with saving')
    }
    res.send({
      success:true,
      message: 'Post saved successfully'
    })
  })
})

exports.product_details = function(req, res){
  Product.findById(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product.name); //returns the name
  })
  
};


app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

  
  // res.send(
  //   [{
  //     title: "Hello World!",
  //     description: "Hi there! How are you????"
  //   }, {
  //     title: "Hello Worldssss!",
  //     description: "Hi there! How are you????"
  //   }, {
  //     title: "Hello Worldadsfjkl!",
  //     description: "Hi there! How are you????"
  //   }]
  // )

app.listen(process.env.PORT || 8081)