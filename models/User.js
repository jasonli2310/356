var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  bio: String,
  image: String,
  hash: String, 
  salt: String
}, {timestamps: true}); //creates createdAt and updateAt

mongoose.model('User', UserSchema); //Registers our schema with mongoose.
// Model accessed via mongoose.model('User')