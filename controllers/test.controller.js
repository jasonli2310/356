const TestM = require('../models/test.model');

exports.test2 = function (req, res) {
    res.send('Greetings from test 21!' + Date() + "boop" + DategetHours());

};

exports.product_create = function(req, res) {


  let testobject = new TestM(
    {
      name: 'name21',
      date: Date(),
      topic: "poop"
    }
  );

  testobject.save();
  console.log('okay saved test')
  res.send('product saved')
};
