var Sequelize = require('sequelize')

const sequelize = new Sequelize('', 'root', 'Password!', {
  dialect: 'mariadb',
  port: 3306
});

sequelize.query('CREATE DATABASE IF NOT EXISTS bnbReviews')

sequelize
  .authenticate()
  .then(function (err) {
    console.log('connection has been established.')
  }, function (err) {
    console.log('unable to connect to the database: ', err)
  })

var Listing = sequelize.define('Listing', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  listingTitle: Sequelize.STRING
});

var OwnerReply = sequelize.define('OwnerReply', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  createdBy: {
    type: Sequelize.INTEGER,
    references: { model: 'users', key: 'id' }
  },
  reviewId: {
    type: Sequelize.INTEGER,
    references: { model: 'reviews', key: 'id' }
  },
  profilePicUrl: {
    type: Sequelize.STRING,
    references: { model: 'users', key: 'profilePicUrl' }
  },
  replyText: Sequelize.STRING,
  date: Sequelize.DATE
});

var Review = sequelize.define('Review', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  createdBy: {
    type: Sequelize.INTEGER,
    references: { model: 'users', key: 'id' }
  },
  listing: {
    type: Sequelize.INTEGER,
    references: { model: 'listing', key: 'id' }
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

var User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  profilePicUrl: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
});

sequelize
  .sync({ force: true })
  .then(function (err) {
    console.log('Created tables.');
  }, function (err) {
    console.log('An error occured while trying to create tables.')
  })