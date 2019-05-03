var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //console.log('callback', cb);
      return db.dbConnection.query('SELECT * FROM messages', (err, result) => {
        if (err) console.log(err);
        else {
          callback(result)
          let string = JSON.stringify(result);
          //console.log('RESULT', string);
          (string);
        };
      });
    }, // a function which produces all the messages
    post: function ({username, message, roomname}) {
      // Username to User Table
      // Roomname to Room Table
      // Message, UserID, RoomID to Messages Table
      // let promiseUser = db.dbConnection.query('INSERT IGNORE INTO users (name) VALUES (?)', [username]);
      // let promiseRoom = db.dbConnection.query('INSERT IGNORE INTO rooms (name) VALUES (?)', [roomname]);
      // // console.log(promiseUser, promiseRoom);
      // Promise.all([promiseUser, promiseRoom])
      //   .then(db.dbConnection.query(`INSERT INTO messages (text,user_id,room_id) VALUES (?, (SELECT id FROM users WHERE name = ?), (SELECT id FROM rooms WHERE name = ?))`, [message, username, roomname]))
      //   .catch(err => console.log(err));
      db.dbConnection.query('INSERT INTO messages (text,user,room) VALUES (?,?,?)', [message, username, roomname]);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      return db.dbConnection.query('SELECT name FROM users');
    },
    post: function ({username}) {
    db.dbConnection.query('INSERT INTO users (name) VALUES (?)', [username]);
    return `${username} added to Users Database`;
    }
  }
};



