const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	require('./config')(app, db);
	require('./routes')(app, db);

	const http = require('http').Server(app);
	require('./socket')(http, db);

	http.listen(process.env.PORT, () => {
		console.log(`Listening on port ${process.env.PORT}`);
	});
});
