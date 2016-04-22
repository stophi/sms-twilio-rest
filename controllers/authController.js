exports.authenticate = function(req, res, next) {
	if (!checkHeaderForCorrectApiKey(req.headers['apikey'])) {
		res.status(401).send('Not authorized.');
		return false;
	}
	return true;
}

function checkHeaderForCorrectApiKey(apiKey) {
	return apiKey === process.env.API_KEY;
};