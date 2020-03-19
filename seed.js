var { User, Listing, Review, OwnerReply, seqDb, createAndConnectDb } = require('./database.js');

const seedDb = () => {
	Listing.create({ listingTitle: 'home2' })
		.then((listing) => console.log(listing.toJSON()))
}

module.exports = { seedDb };