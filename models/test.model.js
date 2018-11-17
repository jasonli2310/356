const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TestMSchema = new Schema({
name: {type: String, required: true, max: 100},
date: {type: String, required: true},
topic: {type: String}
//   _id: Schema.Types.ObjectId,
//   message: {type: String},
//   author: {type: String},
//   location: {type: String},
//   time: {type: String},
//   responses: [{type: Schema.Types.ObjectId, ref: 'Thought'}]
})

//let MessageMeta = new Schema()
module.exports = mongoose.model('TestM', TestMSchema);
