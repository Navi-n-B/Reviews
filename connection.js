const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  dialect: 'mariadb',
  password: '',
  connectionLimit: 5
});

pool.getConnection()
  .then(conn => {
    conn.query('CREATE DATABASE IF NOT EXISTS bnbReviews')
  })

  //old code: database creation now exists in database.js
