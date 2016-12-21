var CleverReach = require('./../index');

var nock = require('nock');
var assert = require('assert');

// Nock / Mocked data
// .login()
nock('https://rest.cleverreach.com/v2/')
	.post('/login.json').times(2)
	.reply(200, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');

// .groups().getAll()
var groupsResp = [{"id":1101111,"name":"Test","stamp":1479125778,"last_mailing":1479144377,"last_changed":1482243134,"isLocked":false}];
nock('https://rest.cleverreach.com/v2/')
	.get('/groups.json?')
	.reply(200, groupsResp);

// groups().createReceiver()
var receiverResp = [{"status": 'insert success', "id": 111}];
nock('https://rest.cleverreach.com/v2/')
	.post('/groups.json/1207987/receivers')
	.reply(200, receiverResp);


// --- Start testing here ---

// Login
var cr = new CleverReach({
	client_id: '123456',
	login: 'john.doe@foo.bar',
	password: 'abc123'
});

// Test .groups()
describe('.groups()', function() {
	describe('.getAll()', function() {
		it('should return json array with one group', function() {
			cr.groups().getAll().then(function(groups) {
				assert.deepEqual(JSON.parse(groups), groupsResp);
			});
		});
	});
	describe('.createReceiver()', function() {
		it('should return a status response "insert success"', function() {
			cr.groups().createReceiver('1207987', [{
				"email": "johannesboyne@gmail.com",
				"activated": new Date().getTime(),
				"registered": new Date().getTime(),
				"deactivated": "0",
				"source": "signup",
				"attributes": {
					"last_name": "Boyne",
					"name": "Johannes",
					"telefonnummer": "+49123123123"
			  }
			}]).then(function(receiver) {
				assert.deepEqual(receiver, receiverResp);
			});
		});
	});
});
