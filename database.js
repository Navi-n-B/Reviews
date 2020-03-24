var Sequelize = require('sequelize')

const password = 'Password!';

const seqDbCreate = new Sequelize('', 'admin', password, {
	dialect: 'mariadb',
	port: 3306
});

const seqDb = new Sequelize('bnbReviews', 'admin', password, {
	dialect: 'mariadb',
	port: 3306
})

var User = seqDb.define('user', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	profilePicUrl: Sequelize.STRING,
	firstName: Sequelize.STRING,
	lastName: Sequelize.STRING
});

var Listing = seqDb.define('listing', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	listingTitle: Sequelize.STRING
});

var Review = seqDb.define('review', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	createdBy: {
		type: Sequelize.INTEGER,
		references: { model: User, key: 'id' }
	},
	listing: {
		type: Sequelize.INTEGER,
		references: { model: Listing, key: 'id' }
	},
	ratingCheckIn: Sequelize.INTEGER,
	ratingAccuracy: Sequelize.INTEGER,
	ratingCleanliness: Sequelize.INTEGER,
	ratingCommunication: Sequelize.INTEGER,
	ratingLocation: Sequelize.INTEGER,
	ratingValue: Sequelize.INTEGER,
	reviewText: Sequelize.STRING,
	date: Sequelize.DATE
});

var OwnerReply = seqDb.define('ownerReply', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	createdBy: {
		type: Sequelize.INTEGER,
		references: { model: User, key: 'id' }
	},
	reviewId: {
		type: Sequelize.INTEGER,
		references: { model: Review, key: 'id' }
	},
	replyText: Sequelize.STRING,
	date: Sequelize.DATE
});


const createAndConnectDb = () => {
	return seqDbCreate
		.authenticate()
		.then(() => {
			console.log('seqDbCreate connection has been established.')
			return seqDbCreate.query('DROP DATABASE IF EXISTS bnbReviews')
		})
		.then(() => {
			return seqDbCreate.query('CREATE DATABASE IF NOT EXISTS bnbReviews')
		})
		.then(() => {
			return seqDb.authenticate()
		})
		.then(() => {
			return seqDb.sync({ force: true })
		})
		.catch((err) => console.log('Error initializing- ', err))
}

module.exports = { User, Listing, Review, OwnerReply, seqDb, createAndConnectDb }