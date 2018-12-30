const Product = require('../models/product.model');
const Thought = require('../models/product.model');
//const Comment = require('../models/product.model');


//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controllerrr!');
};

//CREATE
exports.product_create = function(req, res) {
  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price
    }
  );

  product.save();
  console.log('okay ba')
  res.send('product saved')
};


exports.thought_create = function(req, res) {
  let thought = new Thought(
    {
      message: req.body.message,
      author: req.body.author,
      fullDate: req.body.fullDate,
      day: req.body.day,
      date:req.body.date,
      time: req.body.time,
      location: req.body.location,
      responses: req.body.responses
    }
  );

  thought.save();
  console.log('thot saved')
  res.send('thought saved')
};

exports.allpost = function(req, res){

  Product.find({}, function (error, thought) {
    if (error) { console.error(error); }
    res.send({
      thoughts: thought
    })
  }).sort({_id:-1})
};

// exports.allthought = function(req, res){
//
//   Thought.find({}, function (error, thoughts) {
//     if (error) { console.error(error); }
//     res.send({
//       thought: thoughts
//     })
//   }).sort({_id:-1})
// }


exports.product_details = function(req, res){
  Product.findById(req.params.id, function(err, product) {
    res.send(product.name); //returns the name
  })
};

exports.product_update = function(req, res){
  Product.findByIdAndUpdate(req.params.id, {$set: req.body},
    function(err, product) {
      if (err) return next(err);
      res.send('Product updated.');
    });
  };

  exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
    })
  };


  // COMMENT FUNCTIONS

  exports.comment_send = function(req, res) {
    let comment = new Comment(
      {
        paragraphId: req.body.paragraphid,
        message: req.body.message,
        location: req.body.location,
        fullDate: req.body.fullDate
      }
    );

    comment.save();
    console.log('comment saved')
    res.send('comment saved')
  };
