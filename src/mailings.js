var crRequest = require('./request');
var queryString    = require('query-string');

module.exports = function() {
	var cleverreach = this;
	return {
		getAll: function(data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'mailings.json?' + queryString.stringify(data)
			});
		},
		get: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'mailings.json/' + id
			});
		},
		getLinks: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'mailings.json/' + id + '/links'
			});
		},
		getOrders: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'mailings.json/' + id + '/orders'
			});
		},
		create: function(data) {
			return crRequest(cleverreach, {
				method: 'POST',
				uri: cleverreach.url + 'mailings.json',
				body: data,
				json: true
			});
		},
		update: function(id, data) {
			return crRequest(cleverreach, {
				method: 'PUT',
				uri: cleverreach.url + 'mailings.json/' + id,
				body: data,
				json: true
			});
		},
		getChannels: function() {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'mailings/channel.json'
			});
		},
		getChannel: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'mailings/channel.json/' + id
			});
		},
		removeChannel: function(id) {
			return crRequest(cleverreach, {
				method: 'DELETE',
				uri: cleverreach.url + 'mailings/channel.json/' + id
			});
		}
	};
};
