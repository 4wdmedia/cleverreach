# cleverreach

> Low level API for the CleverReach API

---

## Install

```
$ npm install --save cleverreach
```


## Usage

```js
var CleverReachApi = require('cleverreach');

var keys = {
	'client_id': '123456',
	'login': 'john.doe@foo.bar',
	'password': 'abc123'
};

var CleverReach = new CleverReachApi(keys);

// Get all mailings
CleverReach.mailings({'limit': 25}, function(error, response, body) {
	console.log(response);
});


// Get mailing with specific ID
CleverReach.mailings({'id': 10253173}, function(error, response, body) {
	console.log(response);
});

// Create new mailing
var newMailing = {
	'method': 'POST',
	'mailingData': {
		'name': 'This is the title',
		'type': 'html/text',
		'subject': 'subject line',
		'sender_name': 'Bruce Whayne (Whayne corp.)',
		'sender_email': 'bruce.whayne@gotham.com',
		'group_id': '#',
		'html': 'Newsletter Content',
		'text': 'this is the Text only'
	}
};

CleverReach.mailings(newMailingParams, function(error, response, body) {
	console.log(response);
});
```


## API

### .mailings()




## License

TODO: Add license informations…