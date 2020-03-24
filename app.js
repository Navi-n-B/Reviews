var { User, Listing, Review, OwnerReply, seqDb, createAndConnectDb } = require('./database.js');
var { seedDb } = require('./seed.js')
var express = require('express')
const app = express();
const port = 3001;
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

createAndConnectDb()
	.then(() => {
		seedDb()
	})

//SELECT AVG(reviews.review_stat_1), AVG(reviews.review_stat_2), COUNT(*) FROM reviews WHERE reviews.listing_id = 2;

//SELECT AVG(resources.sort_order) AS sort_order_avg, AVG(resources.sort_order) as sort_order_avg_2, COUNT(*) as total_count FROM resources;

//AVG (column + column) / 2 as review_avg

app.get('/', function (req, res) {
	res.redirect('index.html');
});

// `SELECT * FROM reviews JOIN users ON reviews.createdBy = users.id WHERE listing = ${listingId}`

app.get('/reviews/:listingId', (req, res) => {
	var listingId = req.params.listingId;
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
})

app.get(`/reviews/scores/:listingId`, (req, res) => {
	var listingId = req.params.listingId;
	seqDb.query(`SELECT AVG(ratingCheckIn) as ratingCheckIn, AVG(ratingAccuracy) as ratingAccuracy, AVG(ratingCleanliness) as ratingCleanliness, AVG(ratingCommunication) as ratingCommunication, AVG(ratingLocation) as ratingLocation, AVG(ratingValue) as ratingValue, AVG(ratingCheckIn + ratingAccuracy+ratingCleanliness+ratingCommunication+ratingLocation+ratingValue) / 6 as totalScore, COUNT(*) as numberOfReviews FROM reviews WHERE listing = ${listingId}`)
		.then((data) => {
			res.send(data[0][0])
		})
})

app.get('/reviews/search/:listingId/:searchQuery', (req, res) => {
	var searchQuery = req.params.searchQuery;
	var listingId = req.params.listingId;
	console.log(searchQuery)
	seqDb.query(`SELECT * from reviews WHERE reviewText LIKE '%${searchQuery}%' AND listing =  ${listingId}`)
		.then((filteredReviews) => {
			res.send(filteredReviews)
		})
})

app.get('/reviews/join/listing/:listingId', (req, res) => {
	var listingId = req.params.listingId;
	seqDb.query(`SELECT * FROM reviews JOIN users ON reviews.createdBy = users.id WHERE listing = ${listingId}`)
		.then((filteredResults) => {
			res.send(filteredResults)
		})
})

app.listen(port, () => {
	console.log('listening on port: ', port)
})



//SERVING INDEX.HTML
		// write react app compile it
		// use create react app tool and when npm start start a development server and hosts index.html
		//