var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log(models.messages.get(result => {
       // console.log('CONTROLLER', result);
        return result;
      }));
      res.status(200);
      res.end(models.messages.get(result => {
        console.log('CONTROLLER', result);
        return result;
      }));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.status(200);
      res.end(models.messages.post(req.body));
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.status(200);
      res.end(models.users.get());
    },
    post: function (req, res) {
      res.status(200);
      res.end(models.users.post(req.body));
    }
  }
};

