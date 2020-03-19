const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  connectionLimit: 5
});

pool.getConnection()
  .then(conn => {
    conn.query('CREATE DATABASE IF NOT EXISTS bnbReviews')
  })

