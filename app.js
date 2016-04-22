require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var smsController = require('./controllers/smsController');

var app = express();

// Use body-parser package
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

var port = process.env.PORT || 3000;

var router = express.Router();

router.route('/message')
    .post(smsController.sendMessage);

app.use('/', router);

// error handlers
// development error handler
// will print stacktrace
if (process.env.ENV === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});


//Start the server
app.listen(port);
console.log("SMS Messaging service initialized correctly.");