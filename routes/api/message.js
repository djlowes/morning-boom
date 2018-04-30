const Subscriber = require('../../models/user');
const messageSender = require('../../lib/messageSender');
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// configure mongoose promises
mongoose.Promise = global.Promise;

// Handle form submission
const sendMessages = function (request, response) {
  // Get message info from form submission
  const message = request.body.message;
  const imageUrl = request.body.imageUrl;

  // Send messages to all subscribers
  Subscriber.find().then((subscribers) => {
    messageSender.sendMessageToSubscribers(subscribers, message, imageUrl);
  }).then(() => {
    request.flash('successes', 'Messages on their way!');
    response.redirect('/admin');
  }).catch((err) => {
    console.log('err ' + err.message);
    request.flash('errors', err.message);
    response.redirect('/admin');
  });
};

// const showForm = function (request, response) {
//   // Render form, with any success or error flash messages
//   response.render('admin', {
//     errors: request.flash('errors'),
//     successes: request.flash('successes'),
//   });
// };

router.post('/send', sendMessages);
// router.get('/admin', showForm);

module.exports = router;
