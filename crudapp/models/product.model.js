const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
}); //creates createdAt and updateAt

module.exports = mongoose.model('Product', ProductSchema);
 //Registers our schema with mongoose.
// Model accessed via mongoose.model('User')


