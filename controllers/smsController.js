var authController = require('./authController');
var messageBuilder = require('../helpers/messageBuilder');
var sanitizer = require('../helpers/sanitizer');

var client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);


exports.sendMessage = function(req, res, next) {
	if (!authController.authenticate(req, res, next))
		next(err);

	//Send an SMS text message
	client.sendMessage({

	    to: sanitizer.getCorrectEcuadorNumberFormat(req.query.to),
	    from: process.env.TWILIO_NUMBER,
	    body: messageBuilder.buildMessage(req.query.to, null, req.body.message)

	}, function(err, responseData) {
	    if (err) {
	        res.json(err);
	    }
	    res.json(responseData);
	});

};