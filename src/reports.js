var crRequest = require('./request');
var queryString    = require('query-string');

module.exports = function() {
	var cleverreach = this;
	return {
		getAll: function(data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'reports.json?' + queryString.stringify(data)
			});
		},
		get: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'reports.json/' + id + "?" + queryString.stringify(data)
			});
		},
		getOrders: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'reports.json/' + id + '/orders'
			});
		},
		getReceivers: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'reports.json/' + id + '/receivers?' + queryString.stringify(data)
			});
		},
		getStats: function(id, data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'reports.json/' + id + '/stats?' + queryString.stringify(data)
			});
		}
	};
};
