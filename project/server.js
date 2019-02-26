const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const router = express.Router();
const bcrypt = require("bcryptjs");
const users = require("./api/users");
var path = require('path');

let db;

// extract data from <form> and add to body property in request
app.use(bodyParser.urlencoded({extended: true}));

// for parsing application/json
app.use(bodyParser.json()); // for parsing application/json

// Routes
// app.use("/api/users", users);

MongoClient.connect('mongodb+srv://michelledlee:wVewSigYCrfARa0N@borq-s5a7m.mongodb.net/borq?retryWrites=true', (err, client) => {
	if (err) return console.log(err)

		db = client.db('borq');

	// start server only when database is connected
	app.listen(3000, () => {
		console.log('listening on 3000')
	});
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// handles quotes post request
app.post('/users', (req, res) => {
	console.log(req.body);
	db.collection('users').save(req.body, (err, result) => {
		if (err) return console.log(err);

			console.log('saved to database');
		res.redirect('/');
	});
});

// handles dogs post request
app.post('/dogs', (req, res) => {
	console.log(req.body);
	db.collection('dogs').save(req.body, (err, result) => {
		if (err) return console.log(err);

			console.log('saved to database');
		res.redirect('/');
	});
});

// handles events post request
app.post('/events', (req, res) => {
	console.log(req.body);
	db.collection('events').save(req.body, (err, result) => {
		if (err) return console.log(err);

			console.log('saved to database');
		res.redirect('/');
	});
});

// login
app.post('/test', (req, res) => {
	console.log("server");
	console.log(req.body);
	const email = req.body.email;
  const password = req.body.password;
	db.collection('users').findOne({username : req.body.username}).then(user => {
		// Check if user exists
   		 if (!user) {
      	return res.status(404).json({ emailnotfound: "Email not found" });
 	   }

		var isPasswordValid = bcrypt.compare(req.body.password, user.password);
		console.log(req.body.password);
		console.log(user.password);
		console.log(isPasswordValid);
		if (!isPasswordValid) {
			console.log("Password is wrong fool");
		} else {
			console.log("You're logged in now baby");
		}
		res.redirect('/');
	});
});