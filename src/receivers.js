var crRequest = require('./request');
var queryString    = require('query-string');

module.exports = function() {
	var cleverreach = this;
	return {
		get: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'receivers.json/' + id + '?' + queryString.stringify(data)
			});
		},
		getEvents: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'receivers.json/' + id + '/events?' + queryString.stringify(data)
			});
		},
		getOrders: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'receivers.json/' + id + '/orders?' + queryString.stringify(data)
			});
		},
		getAttributes: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'receivers.json/' + id + '/attributes?' + queryString.stringify(data)
			});
		}
	};
};
