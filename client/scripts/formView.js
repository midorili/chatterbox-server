// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var room = $('#rooms select').find(':selected').text();
    Messages.generateNewMessage(room);

    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};


// var FormView = {

//   $form: $('form'),

//   initialize: function() {
//     FormView.$form.on('submit', FormView.handleSubmit);
//   },

//   handleSubmit: function(event) {
//     // Stop the browser from submitting the form
//     event.preventDefault();


//     var message = {
//       username: App.username,
//       text: FormView.$form.find('#message').val(),
//       roomname: Rooms.selected || 'lobby'
//     };

//     Parse.create(message, (data) => {
//       _.extend(message, data[0]);
//       Messages.add(message, MessagesView.render);
//     });
//       },

//   setStatus: function(active) {
//     var status = active ? 'true' : null;
//     FormView.$form.find('input[type=submit]').attr('disabled', status);
//   }

// };
