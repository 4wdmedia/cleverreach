var request        = require('request');
var requestPromise = require('request-promise');
var queryString    = require('query-string');

var CleverReach = module.exports = function(keys) {
	this.url = 'https://rest.cleverreach.com/v2/';
	this.getToken = function() {
		var promise = requestPromise({
			method: 'POST',
			uri: this.url + 'login.json',
			body: keys,
			json: true
		});

		return promise;
	}
};

CleverReach.prototype.mailings = function (params, callback) {
	var id = params.id || false;
	var url = this.url;
	var method = params.method || 'GET';
	delete params.method;

	if (method == 'POST') {
		return this.getToken().then(function(token) {
			return request({
				method: method,
				uri: url + 'mailings.json?token=' + token,
				body: params,
				json: true
			}, callback);
		});
	} else {
		if (id) {
			return this.getToken().then(function(token) {
				return request({
					method: method,
					uri: url + 'mailings.json/' + id + '?token=' + token,
				}, callback);
			});
		} else {
			return this.getToken().then(function(token) {
				return request({
					method: method,
					uri: url + 'mailings.json?token=' + token + '&' + queryString.stringify(params),
				}, callback);
			});
		}
	}
};