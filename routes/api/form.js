const express = require('express');

const router = express.Router();

const showForm = function (request, response) {
  console.log('DJLOWZ', response);
  // Render form, with any success or error flash messages
  response.render('index', {
    errors: request.flash('errors'),
    successes: request.flash('successes'),
  });
};

router.get('/admin', showForm);

module.exports = router;
