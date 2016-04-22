exports.buildMessage = function(replyToNumber, link, message) {
	var text = "De:" + replyToNumber + ": " + message;

	return text;
}

exports.createResponse = function(status, message) {

};