const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true}
}); //creates createdAt and updateAt


let ThoughtSchema = new Schema({
    message: {type: String, required: true},
    author: {type: String},
    fullDate: {type: String},
    location: {type: String},
    responses: [{type: Schema.Types.ObjectId, ref: 'Thought'}]
}); //creates createdAt and updateAt


// this comment schema is only for the first story, not ThoughtSchema
let CommentSchema = new Schema({
  paragraphId: {type: String, required: true},
  message: {type: String, required: true},
  location: {type: String},
  fullDate: {type: String}
})


//let MessageMeta = new Schema()
module.exports = mongoose.model('Product', ProductSchema);
module.exports = mongoose.model('Thought', ThoughtSchema);
module.exports = mongoose.model('Comment', CommentSchema);


// module.exports = mongoose.model('Thought', ThoughtSchema);
 //Registers our schema with mongoose.
// Model accessed via mongoose.model('User')
