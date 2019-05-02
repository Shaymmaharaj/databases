var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      return db.dbConnection.query('SELECT text FROM messages');
    }, // a function which produces all the messages
    post: function ({username, message, roomname}) {
      // Username to User Table
      // Roomname to Room Table
      // Message, UserID, RoomID to Messages Table
      db.dbConnection.query('INSERT INTO users (name) VALUES (?)', [username]);
      db.dbConnection.query('INSERT INTO rooms (name) VALUES (?)', [roomname]);
      db.dbConnection.query(`INSERT INTO messages (text,user_id,room_id) 
                            VALUES (?,
                             ( SELECT id FROM users WHERE name = ?),
                             ( SELECT id FROM rooms WHERE name = ?))`,
                              [message, username, roomname]);


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



