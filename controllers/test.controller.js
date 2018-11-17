const TestM = require('../models/test.model');

exports.test2 = function (req, res) {
    res.send('Greetings from test 21!');


};

exports.product_create = function(req, res) {
  let testobject = new TestM(
    {
      name: 'name21',
      price: 'asdf',
      topic: 'topic123'
    }
  );

  testobject.save();
  console.log('okay saved test')
  res.send('product saved')
};
