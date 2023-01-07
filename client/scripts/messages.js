// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  storage: [],
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  generateNewMessage: function(roomName = 'lobby') {
    var message = document.getElementById('message').value;

    var messageObject = {
      username: App.username,
      text: message,
      roomname: roomName
    };

    Parse.create(messageObject);
  }

};


// var Messages = {


//   _data: {},

//   items: function() {
//     return _.chain(Object.values(Messages._data)).sortBy('createdAt');
//   },

//   add: function(message, callback = ()=>{}) {
//     Messages._data[message.message_id] = message;
//     callback(Messages.items());
//   },

//   update: function(messages, callback = ()=>{}) {
//     var length = Object.keys(Messages._data).length;

//     for (let message of messages) {
//       Messages._data[message.message_id] = Messages._conform(message);
//     }

//     // only invoke the callback if something changed
//     if (Object.keys(Messages._data).length !== length) {
//       callback(Messages.items());
//     }
//   },

//   _conform: function(message) {
//     // ensure each message object conforms to expected shape
//     message.text = message.text || '';
//     message.username = message.username || '';
//     message.roomname = message.roomname || '';
//     return message;
//   }

// };
