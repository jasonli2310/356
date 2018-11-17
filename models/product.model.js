const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true}
}); //creates createdAt and updateAt


//let MessageMeta = new Schema()
module.exports = mongoose.model('Product', ProductSchema);

// module.exports = mongoose.model('Thought', ThoughtSchema);
 //Registers our schema with mongoose.
// Model accessed via mongoose.model('User')
