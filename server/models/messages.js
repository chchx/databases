var db = require('../db');

module.exports = {
  getAll: function () {
    /*
      I = void
      O = array
    */
   let queryString = 'SELECT * FROM messages'
   db.dbConnection.query(queryString, (err, rows) => {
    if (err) {
      throw("Error with querying the DB");
    } else {
      console.log(rows);
      return rows;
    }
   })

  }, // a function which produces all the messages
  create: function (messageObj) {
    console.log(messageObj);
    /*
      I = obj
        var message = {
          username: App.username,
          text: FormView.$form.find('#message').val(),
          roomname: Rooms.selected || 'lobby'
        };
      messages
      id, text, roomID, userID
      O = err
    */
   var text = messageObj["text"];
   var roomname = messageObj["roomname"];
   var username = messageObj["username"];

  var queryString =
  `
  insert into messages (text, userID, roomID) values (  ? ,
    (select ID from rooms where roomname = ?), (select ID from users where username = ?)
  )
  `
  // var query = 'INSERT INTO data_9_17 (partNumber, description, price) VALUES (?, ?, ?)';

  // con.query(query, [part[i], des[i], price[i]], function(err, results) ... )

  db.dbConnection.query(queryString, [text, roomname, roomname, username], (err, rows) => {
    if (err) {
      console.log("failed");
      return err;
    } else {
      console.log("success");
      return messageObj;
    }
   })

  } // a function which can be used to insert a message into the database
};

// module.exports.getAll()

var message = {
  username: 'chris',
  text: 'Check',
  roomname: 'lobby'
};
module.exports.create(message);
module.exports.getAll()

