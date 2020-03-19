var { User, Listing, Review, OwnerReply, seqDb, createAndConnectDb } = require('./database.js');
var { seedDb } = require('./seed.js')

createAndConnectDb()
	.then(() => {
		seedDb()
	})