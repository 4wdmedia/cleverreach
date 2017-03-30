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
		getAttributes: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/attributes'
			});
		},
		getBlacklist: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/blacklist'
			});
		},
		getFilters: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/filters'
			});
		},
		getFilter: function(id, filterId) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/filters/' + filterId
			});
		},
		getFilterReceivers: function(id, filterId) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/filters/' + filterId + '/receivers'
			});
		},
		getFilterStats: function(id, filterId) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/filters/' + filterId + '/stats'
			});
		},
		getReceivers: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/receivers'
			});
		},
		getReceiver: function(id, receiverId) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/receivers/' + receiverId
			});
		},
		getReceiverEvents: function(id, receiverId) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/receivers/' + receiverId + '/events'
			});
		},
		getReceiverOrders: function(id, receiverId) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/receivers/' + receiverId + '/orders'
			});
		},
		getReceiverAttributes: function(id, poolId) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/receivers/' + poolId + '/attributes'
			});
		},
		get: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id
			});
		},
		getAdvancedStats: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/advancedstats'
			});
		},
		getForms: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/forms'
			});
		},
		getStats: function(id) {
			return crRequest(cleverreach, {
				uri: cleverreach.url + 'groups.json/' + id + '/stats'
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
		delete: function(id) {
			return crRequest(cleverreach, {
				method: 'DELETE',
				uri: cleverreach.url + 'groups.json/' + id
			});
		}
	};
};
