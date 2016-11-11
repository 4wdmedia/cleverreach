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

// CleverReach.prototype.clients = require('./src/clients');
// CleverReach.prototype.mycontent = require('./src/mycontent');
// CleverReach.prototype.blacklist = require('./src/blacklist');
// CleverReach.prototype.groups = require('./src/groups');
// CleverReach.prototype.forms = require('./src/forms');
// CleverReach.prototype.attributes = require('./src/attributes');
// CleverReach.prototype.receivers = require('./src/receivers');
CleverReach.prototype.reports = require('./src/reports');
CleverReach.prototype.mailings = require('./src/mailings');
