var requestPromise = require('request-promise');
var deepExtend = require('deep-extend');

module.exports = function(cleverreach, options) {
	return cleverreach.login().then(function(token) {
		options = deepExtend({}, {
			method: 'GET',
			headers: {
				'Authorization': 'Bearer ' + token
			}
		}, options);
		return requestPromise(options);
	});
};
