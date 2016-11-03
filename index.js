var requestPromise = require('request-promise');

var CleverReach = module.exports = function(keys) {
	this.url = 'https://rest.cleverreach.com/v2/';
	this.login = function() {
		var promise = requestPromise({
			method: 'POST',
			uri: this.url + 'login.json',
			body: keys,
			json: true
		});

		return promise;
	}
};

CleverReach.prototype.mailings = require('./src/mailings');
