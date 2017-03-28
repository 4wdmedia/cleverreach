# cleverreach

> Promise based npm module for using [CleverReach REST API](https://rest.cleverreach.com/explorer/)

---

## Install

```
$ npm install --save cleverreach
```


## Usage

```js
var CleverReach = require('cleverreach');

// Login credentials
var cr = new CleverReach({
	client_id: '123456',
	login: 'john.doe@foo.bar',
	password: 'abc123'
});

// Get all mailings
cr.mailings().getAll().then(function(mailings) {
	console.log(mailings);
});

// Get single mailing with specified ID
cr.mailings().get(1234567).then(function(mailing) {
	console.log(mailing);
}).catch(function(error) {
	console.log(error);
})

// Create new mailing
var newMailing = {
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

cr.mailings().create(newMailing).then(function(mailing) {
	console.log(mailing)
});
```


## API

You find detailed infos about the CleverReach REST API [here](https://rest.cleverreach.com/explorer/)

Here is a list of all implemented functions:

### Groups

#### groups().getAll(data)
#### groups().get(id)
#### groups().create(name)
#### groups().createReceiver(id, data)
#### groups().deleteGroup(id)

### Receivers

#### .receivers().get(id, data)
#### .receivers().getEvents(id, data)
#### .receivers().getOrders(id, data)
#### .receivers().getAttributes(id, data)

### Reports

#### .reports().getAll(data)
#### .reports().get(id, data)
#### .reports().getOrders(id)
#### .reports().getReceivers(id, data)
#### .reports().getStats(id, data)

### Mailings

#### .mailings().getAll(data)
#### .mailings().get(id)
#### .mailings().getLinks(id)
#### .mailings().getOrders(id)
#### .mailings().create(data)
#### .mailings().update(id, data)
#### .mailings().getChannels()
#### .mailings().getChannel(id)
#### .mailings().deleteChannel(id)
