var faker = require('faker')
var { User, Listing, Review, OwnerReply, seqDb, createAndConnectDb } = require('./database.js');

const generateRandomReviewScore = () => {
	return Math.floor(Math.random() * 5) + 1;
}

const seedDb = () => {

	var generateUsers = (records) => {
		var container = [];
		for (var i = 0; i < records; i++) {
			var personObj = {
				profilePicUrl: faker.internet.avatar(),
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName()
			}
			container.push(personObj)
		}
		return container;
	}

	var generateListings = (records) => {
		var container = [];
		for (var i = 0; i < records; i++) {
			var listingObj = {
				listingTitle: faker.commerce.productName()
			}
			container.push(listingObj)
		}
		return container;
	}

	var UserBulk = User.bulkCreate(generateUsers(5))
	var ListingBulk = Listing.bulkCreate(generateListings(5))

	Promise.all([UserBulk, ListingBulk])
		.then((res) => {
			var UserRes = res[0];
			var ListingRes = res[1];
			for (var i = 0; i < UserRes.length; i++) {
				for (var j = 0; j < ListingRes.length; j++) {
					var reviewObj = {
						ratingCheckIn: generateRandomReviewScore(),
						ratingAccuracy: generateRandomReviewScore(),
						ratingCleanliness: generateRandomReviewScore(),
						ratingCommunication: generateRandomReviewScore(),
						ratingLocation: generateRandomReviewScore(),
						ratingValue: generateRandomReviewScore(),
						reviewText: faker.lorem.sentence(),
						date: new Date
					}
					reviewObj.createdBy = UserRes[i].id;
					reviewObj.listing = ListingRes[j].id;
					Review.create(reviewObj);
				}
			}
			//refactor 53 to 69 to create a list of viable reviews then bulk create the reviews
			// place a then after the bulk create to generate ownerReply using the array returned by bulk create access the reviewId to pass into ownerReply.
			//Review.bulkCreate({review}).then((reviews) => for loop over reviews and grab reviews[i].id)
		})

}

module.exports = { seedDb };


//four functions one each for a model each creating an array for

// {
// 	profilePicUrl: 'string';
// 	firstName: 'string';
// 	lastName: 'string';
// }


