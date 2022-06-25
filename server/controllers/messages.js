var models = require('../models');

module.exports = {
  get: function (req, res) {
    res.status(200);
    res.send(models.getAll());
    // res.end()
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    if (!models.create(req.body)) {
      res.status(404);
    } else {
      res.status(200);
    }
    res.end();
  } // a function which handles posting a message to the database
};
