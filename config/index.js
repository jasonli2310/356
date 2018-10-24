 //used for storing configuration settings

module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret'
};


//models used for storing our Mongoose models