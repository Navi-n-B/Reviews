const { User, Listing, Review, OwnerReply, seqDb, createAndConnectDb } = require('./database.js');
const { seedDb } = require('./seed.js')
const express = require('express')
const cors = require('cors')
const app = express();
const port = 3001;
const path = require('path')

const _dirname = '../dist';

createAndConnectDb()
	.then(() => {
		seedDb()
	})
	.catch((err) => {
		res.status(500)
	})

app.use(cors())

app.use('/reviews/:listingId', express.static(path.join(__dirname, 'dist')));

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/api/reviews/:listingId', (req, res) => {
	var listingId = req.params.listingId;
	console.log(21, listingId)
	seqDb.query(`SELECT *,
	reviews.id AS reviewId, reviews.date AS reviewDate,

	users1.id AS userId, users1.firstName AS userFirstName, users1.lastName AS userLastName, users1.profilePicUrl AS userProfilePicUrl,

	users2.id AS ownerId, users2.firstName AS ownerFirstName, users2.lastName AS ownerLastName, users2.profilePicUrl AS ownerProfilePicUrl,

	ownerReplies.id AS ownerReplyId, ownerReplies.date AS ownerReplyDate

	FROM reviews

	LEFT JOIN users AS users1 ON reviews.createdBy = users1.id

	LEFT JOIN ownerReplies ON reviews.id = ownerReplies.reviewId

	LEFT JOIN users AS users2 ON ownerReplies.createdBy = users2.id

	WHERE listing= ${listingId}`)
		.then((data) => {
			res.send(data[0])
		})
		.catch((err) => {
			res.status(500)
		})
})

app.get(`/api/reviews/scores/:listingId`, (req, res) => {
	var listingId = req.params.listingId;
	seqDb.query(`SELECT AVG(ratingCheckIn) as ratingCheckIn, AVG(ratingAccuracy) as ratingAccuracy, AVG(ratingCleanliness) as ratingCleanliness, AVG(ratingCommunication) as ratingCommunication, AVG(ratingLocation) as ratingLocation, AVG(ratingValue) as ratingValue, AVG(ratingCheckIn + ratingAccuracy+ratingCleanliness+ratingCommunication+ratingLocation+ratingValue) / 6 as totalScore, COUNT(*) as numberOfReviews FROM reviews WHERE listing = ${listingId}`)
		.then((data) => {
			res.send(data[0][0])
		})
		.catch((err) => {
			res.status(500)
		})
})

app.get('/api/reviews/search/:listingId/:searchQuery', (req, res) => {
	var searchQuery = req.params.searchQuery;
	var listingId = req.params.listingId;
	seqDb.query(`SELECT * from reviews WHERE reviewText LIKE '%${searchQuery}%' AND listing =  ${listingId}`)
		.then((filteredReviews) => {
			res.send(filteredReviews)
		})
		.catch((err) => {
			res.status(500)
		})
})
app.listen(port, () => {
	console.log('listening on port: ', port)
})
