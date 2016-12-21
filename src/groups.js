var crRequest = require('./request');
var queryString    = require('query-string');

module.exports = function() {
	var cleverreach = this;
	return {
		getAll: function(data) {           // return list of groups
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json?' + queryString.stringify(data)
			});
		},
		get: function(id) {                // return a single group
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id
			});
		},
		createReceiver: function(id, data) {       // add receiver to mailing list
			return crRequest(cleverreach, {
				method: 'POST',
				uri: cleverreach.url + 'groups.json/' + id + '/receivers',
				body: data,
				json: true
			});
		},
		deleteGroup: function(id) {         // delete group
			return crRequest(cleverreach, {
				method: 'DELETE',
				uri: cleverreach.url + 'groups.json/' + id
			});
		}
	};
};
