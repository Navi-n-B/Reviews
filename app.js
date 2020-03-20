var { User, Listing, Review, OwnerReply, seqDb, createAndConnectDb } = require('./database.js');
// var { seedDb } = require('./seed.js')
var express = require('express')
const app = express();
const port = 3001;

createAndConnectDb()
	.then(() => {
		// seedDb()
	})

app.get('/', (req, res) => {
	seqDb.query('SELECT * FROM users')
		.then((rows) => {
			return rows.toJSON()
		})
		.then((data) => {
			res.send(data)
		})
})

// componentDidMount() {
// 	//blocked by cors
// 	fetch('http://localhost:3000/api/blogs')
// 		//if allowed through- reassign state.posts to the result of the fetch requests
// 		.then((res) => {
// 			return res.json()
// 		})
// 		.then((data) => {
// 			console.log(1242, data)
// 			this.setState({ posts: data });
// 		})
// 		.catch((err) => console.log(err));
// }


app.listen(port, () => {
	console.log('listening on port: ', port)
})