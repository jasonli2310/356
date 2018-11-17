const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true}
}); //creates createdAt and updateAt


let TestSchema = new Schema({
name: {type: String, required: true, max: 100},
price: {type: Number, required: true},
topic: {type: String}
//   _id: Schema.Types.ObjectId,
//   message: {type: String},
//   author: {type: String},
//   location: {type: String},
//   time: {type: String},
//   responses: [{type: Schema.Types.ObjectId, ref: 'Thought'}]
})


//let MessageMeta = new Schema()

module.exports = mongoose.model('Product', ProductSchema);
module.exports = mongoose.model('Test', TestSchema);


// module.exports = mongoose.model('Thought', ThoughtSchema);
 //Registers our schema with mongoose.
// Model accessed via mongoose.model('User')
