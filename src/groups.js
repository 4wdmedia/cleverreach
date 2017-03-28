var crRequest = require('./request');
var queryString    = require('query-string');

module.exports = function() {
	var cleverreach = this;
	return {
		getAll: function(data) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json?' + queryString.stringify(data)
			});
		},
		get: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id
			});
		},
		create: function(name) {
			return crRequest(cleverreach, {
				method: 'POST',
				uri: cleverreach.url + 'groups.json',
				body: {
					name: name
				},
				json: true
			});
		},
		createReceiver: function(id, data) {
			return crRequest(cleverreach, {
				method: 'POST',
				uri: cleverreach.url + 'groups.json/' + id + '/receivers',
				body: data,
				json: true
			});
		},
		deleteGroup: function(id) {
			return crRequest(cleverreach, {
				method: 'DELETE',
				uri: cleverreach.url + 'groups.json/' + id
			});
		}
	};
};
